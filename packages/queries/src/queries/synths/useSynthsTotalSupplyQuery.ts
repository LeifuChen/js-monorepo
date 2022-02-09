import { useQuery, UseQueryOptions } from 'react-query';
import { wei } from '@synthetixio/wei';
import { QueryContext } from '../../context';
import useSynthetixQueries from '../../../src/';

const useSynthsTotalSupplyQuery = (ctx: QueryContext, options?: UseQueryOptions<any>) => {
	const { subgraph } = useSynthetixQueries();

	const synthsQuery = subgraph.useGetSynths(
		{
			first: Number.MAX_SAFE_INTEGER,
		},
		{
			id: true,
			name: true,
			symbol: true,
			totalSupply: true,
		}
	);

	const ratesQuery = subgraph.useGetLatestRates(
		{
			first: Number.MAX_SAFE_INTEGER,
		},
		{ id: true, rate: true }
	);

	const wrappersQuery = subgraph.useGetWrappers(
		{
			first: Number.MAX_SAFE_INTEGER,
		},
		{
			id: true,
			tokenAddress: true,
			amount: true,
			amountInUSD: true,
			maxAmount: true,
		}
	);

	// cant filter on isOpen, error in console
	const loansQuery = subgraph.useGetLoans(
		{
			first: Number.MAX_SAFE_INTEGER,
			where: { isOpen: true },
			orderBy: 'collateralMinted',
			orderDirection: 'desc',
		},
		{
			id: true,
			collateralMinted: true,
			amount: true,
		}
	);

	const shortsQuery = subgraph.useGetShorts(
		{
			first: Number.MAX_SAFE_INTEGER,
			where: { isOpen: true },
			orderBy: 'collateralLockedAmount',
			orderDirection: 'desc',
		},
		{
			id: true,
			collateralLocked: true,
			collateralLockedAmount: true,
			synthBorrowed: true,
			synthBorrowedAmount: true,
		}
	);
	const allLoaded =
		synthsQuery.isSuccess &&
		ratesQuery.isSuccess &&
		wrappersQuery.isSuccess &&
		loansQuery.isSuccess &&
		shortsQuery.isSuccess;
	return useQuery<any>(
		['synths', 'totalSupply', ctx.networkId, allLoaded],
		async () => {
			console.log(loansQuery.error);
			if (allLoaded) {
				return allLoaded;
			}

			/* 		
			const {
				contracts: { SynthUtil, ExchangeRates, CollateralManagerState, EtherWrapper },
			} = ctx.snxjs!;

			const {
				utils: { formatBytes32String, parseBytes32String, formatEther },
			} = ethers;

			const [sETHKey, sBTCKey, sUSDKey] = [Synths.sETH, Synths.sBTC, Synths.sUSD].map(
				formatBytes32String
			);

			const isL2 =
				NetworkIdByName['mainnet-ovm'] === ctx.networkId! ||
				NetworkIdByName['kovan-ovm'] === ctx.networkId!;

			const [
				synthTotalSupplies,

				unformattedEthPrice,
				unformattedBtcPrice,

				[unformattedETHBorrows, unformattedETHShorts],
				[unformattedBTCBorrows, unformattedBTCShorts],
				[unformattedSUSDBorrows, unformattedSUSDShorts],

				unformattedWrapprSETH,
				unformattedWrapprSUSD,
			] = await Promise.all([
				SynthUtil.synthsTotalSupplies(),
				ExchangeRates.rateForCurrency(sETHKey),
				ExchangeRates.rateForCurrency(sBTCKey),
				isL2 ? Promise.resolve(['0', '0']) : CollateralManagerState.totalIssuedSynths(sETHKey),
				isL2 ? Promise.resolve(['0', '0']) : CollateralManagerState.totalIssuedSynths(sBTCKey),
				isL2 ? Promise.resolve(['0', '0']) : CollateralManagerState.totalIssuedSynths(sUSDKey),
				isL2 ? Promise.resolve('0') : EtherWrapper.sETHIssued(),
				isL2 ? Promise.resolve('0') : EtherWrapper.sUSDIssued(),
			]);

			const [
				ethPrice,
				btcPrice,

				ethBorrows,
				ethShorts,

				btcBorrows,
				btcShorts,

				susdBorrows,
				susdShorts,

				wrapprSETH,
				wrapprSUSD,
			] = [
				unformattedEthPrice,
				unformattedBtcPrice,

				unformattedETHShorts,
				unformattedETHBorrows,

				unformattedBTCShorts,
				unformattedBTCBorrows,

				unformattedSUSDShorts,
				unformattedSUSDBorrows,

				unformattedWrapprSETH,
				unformattedWrapprSUSD,
			].map((val) => wei(formatEther(val)));

			let totalValue = wei(0);
			let totalSkewValue = wei(0);
			let totalStakersDebt = wei(0);
			let ethNegativeEntries = wei(0);
			let btcNegativeEntries = wei(0);
			let usdNegativeEntries = wei(0);

			const supplyData: SynthTotalSupply[] = [];
			for (let i = 0; i < synthTotalSupplies[0].length; i++) {
				const value = wei(formatEther(synthTotalSupplies[2][i]));
				const name = parseBytes32String(synthTotalSupplies[0][i]);
				const totalSupply = wei(formatEther(synthTotalSupplies[1][i]));

				let skewValue = value;

				switch (name) {
					case Synths.sBTC: {
						btcNegativeEntries = btcShorts.add(btcBorrows);

						skewValue = totalSupply.sub(btcNegativeEntries).mul(btcPrice);
						break;
					}

					case Synths.sETH: {
						const multiCollateralLoansETH = ethShorts.add(ethBorrows);
						ethNegativeEntries = multiCollateralLoansETH.add(wrapprSETH);

						skewValue = totalSupply.sub(ethNegativeEntries).mul(ethPrice);
						break;
					}

					case Synths.sUSD: {
						const multiCollateralLoansSUSD = susdShorts.add(susdBorrows);
						usdNegativeEntries = multiCollateralLoansSUSD.add(wrapprSUSD);

						skewValue = totalSupply.sub(usdNegativeEntries);
						break;
					}

					default:
				}

				supplyData.push({
					name,
					totalSupply,
					value,
					skewValue,
					poolProportion: wei(0), // true value to be computed in next step
				});
				totalValue = totalValue.add(value);
				totalSkewValue = totalSkewValue.add(skewValue.abs());
				totalStakersDebt = totalStakersDebt.add(skewValue);
			}

			// Add proportion data to each SynthTotalSupply object
			const supplyDataWithProportions = supplyData.map((datum) => ({
				...datum,
				poolProportion: totalSkewValue.gt(0) ? datum.skewValue.abs().div(totalSkewValue) : wei(0),
			}));

			const supplyDataMap: { [name: string]: SynthTotalSupply } = {};
			for (const synthSupply of supplyDataWithProportions) {
				supplyDataMap[synthSupply.name] = synthSupply;
			}

			return {
				totalValue,
				totalStakersDebt,
				supplyData: supplyDataMap,
				priceData: {
					ethPrice,
					btcPrice,
				},
				shortData: {
					// ethBorrows,
					// ethShorts,

					// btcBorrows,
					// btcShorts,

					// susdBorrows,
					// susdShorts,

					// wrapprSETH,
					// wrapprSUSD,

					// oldLoansETH,
					// oldLoansSUSD,
					ethNegativeEntries,
					btcNegativeEntries,
					usdNegativeEntries,
				},
				synthTotalSupplies,
			}; */
		},
		{
			enabled: !!ctx,
			...options,
		}
	);
};

export default useSynthsTotalSupplyQuery;
