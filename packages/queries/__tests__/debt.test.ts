import { NetworkIdByName } from '@synthetixio/contracts-interface';
import { renderHook } from '@testing-library/react-hooks';
import { useSynthsTotalSupplyQuery } from 'generated/queryFuncs';
import { getFakeQueryContext, getWrapper } from 'testUtils';

describe('@synthetixio/queries synths useSynthsTotalSupplyQuery', () => {
	test('debug', async () => {
		const ctx = getFakeQueryContext();
		ctx.networkId = NetworkIdByName['mainnet-ovm'];
		const wrapper = getWrapper();
		const { result, waitFor } = renderHook(() => useSynthsTotalSupplyQuery(ctx), { wrapper });
	});
});
