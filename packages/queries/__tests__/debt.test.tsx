import { NetworkIdByName } from '@synthetixio/contracts-interface';
import { renderHook } from '@testing-library/react-hooks';
import { useSynthsTotalSupplyQuery } from '../generated/queryFuncs';
import { createQueryContext, SynthetixQueryContextProvider } from '../src';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.setTimeout(15000);
describe('@synthetixio/queries synths useSynthsTotalSupplyQuery', () => {
	test('debug', async () => {
		const ctx = createQueryContext({ networkId: NetworkIdByName['mainnet-ovm'] });

		const { result, waitFor, waitForValueToChange } = renderHook(
			() => useSynthsTotalSupplyQuery(ctx.context, { enabled: true }),
			{
				wrapper: ({ children }: { children: ReactNode[] }) => (
					<SynthetixQueryContextProvider
						value={createQueryContext({ networkId: NetworkIdByName['mainnet-ovm'] })}
					>
						<QueryClientProvider
							client={
								new QueryClient({
									defaultOptions: {
										queries: {
											refetchInterval: 1000,
										},
									},
								})
							}
							contextSharing={true}
						>
							{children}
						</QueryClientProvider>
					</SynthetixQueryContextProvider>
				),
			}
		);
		await waitForValueToChange(() => result?.current?.data, { timeout: 15000 });
		expect(result?.current?.isSuccess).toBe(true);
	});
});
