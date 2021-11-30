import { useQuery, UseQueryOptions } from 'react-query';
import Wei from '@synthetixio/wei';
import { wei } from '@synthetixio/wei/build/node/wei';
import { QueryContext } from '../../context';
import { times, findIndex } from 'lodash';
import { request, gql } from 'graphql-request';

type WalletDebtTimeseriesData = {
	timestamp: Wei;
	debtPercentage: number;
	debtAmount: Wei;
}[];

const useGetDebtTimeseries = (
	ctx: QueryContext,
	walletAddress: string,
	options?: UseQueryOptions<WalletDebtTimeseriesData>
) => {
	return useQuery<WalletDebtTimeseriesData>(
		['debt', 'data', ctx.networkId, walletAddress],
		async () => {
			const debtStates = (
				await request(
					ctx.subgraphEndpoints.main,
					gql`
						{
							debtStates(first: 100000, orderBy: "timestamp", orderDirection: "asc") {
								timestamp
								debtRatio
								totalIssuedSynths
							}
						}
					`
				)
			).data;

			const debtSnapshots = (
				await request(
					ctx.subgraphEndpoints.main,
					gql`
			{
			  debtSnapshots(first: 100000, orderBy: "timestamp", orderDirection: "asc", where: { account: "${walletAddress}" }) {
				timestamp
				debtBalanceOf
			  }
			}
			`
				)
			).data;

			const timeseries: WalletDebtTimeseriesData = [];

			if (debtStates && debtSnapshots) {
				times(debtSnapshots.length, () => {
					let currentDebtSnapshotIndex = 0;
					let debtStateAsOfDebtSnapshotIndex = findIndex(
						debtStates,
						(ds: any) => ds.timestamp < debtSnapshots[currentDebtSnapshotIndex].timestamp
					);

					for (const debtState of debtStates.slice(debtStateAsOfDebtSnapshotIndex)) {
						if (
							currentDebtSnapshotIndex < debtSnapshots.length - 1 &&
							debtSnapshots[currentDebtSnapshotIndex + 1].timestamp < debtState.timestamp
						) {
							currentDebtSnapshotIndex++;
							debtStateAsOfDebtSnapshotIndex = findIndex(
								debtStates,
								(ds: any) => ds.timestamp < debtSnapshots[currentDebtSnapshotIndex].timestamp
							);
						}

						const currentDebtSnapshot = debtSnapshots[currentDebtSnapshotIndex];
						currentDebtSnapshot.debtBalanceOf = currentDebtSnapshot.debtBalanceOf || wei(0);
						const debtStateAsOfDebtSnapshot = debtStates[debtStateAsOfDebtSnapshotIndex];

						timeseries.push({
							timestamp: wei(debtState.timestamp),
							debtPercentage:
								((currentDebtSnapshot.debtBalanceOf.toNumber() /
									debtState.totalIssuedSynths.toNumber()) *
									debtStateAsOfDebtSnapshot.debtRatio.toNumber()) /
								debtState.debtRatio.toNumber(),
							debtAmount: wei(
								(currentDebtSnapshot.debtBalanceOf.toNumber() *
									debtStateAsOfDebtSnapshot.debtRatio.toNumber()) /
									debtState.debtRatio.toNumber()
							),
						});
					}
				});
			}

			return timeseries;
		},
		{
			enabled: ctx.networkId != null && walletAddress != null,
			...options,
		}
	);
};

export default useGetDebtTimeseries;
