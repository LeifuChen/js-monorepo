import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { wei } from '@synthetixio/wei';
import erc20Abi from '../../abis/ERC20.json';
import { BigNumber, ethers } from 'ethers';
import { CRYPTO_CURRENCY_MAP } from '../../currency';
import { QueryContext } from '../../context';
import { Token, TokenBalances } from '../../types';

type UseTokensBalancesQueryReturn = UseQueryResult<TokenBalances>;
const useTokensBalancesQuery = (
	ctx: QueryContext,
	tokens: Token[],
	walletAddress: string | null,
	options?: UseQueryOptions<TokenBalances>
): UseTokensBalancesQueryReturn => {
	return useQuery<TokenBalances>(
		['walletBalances', 'tokens', ctx.networkId, walletAddress, tokens.join()],
		async () => {
			const getBalance = ({ address, symbol }: Token): Promise<ethers.BigNumber> => {
				if (!ctx.provider || !walletAddress) return Promise.resolve(BigNumber.from(0));
				if (symbol === CRYPTO_CURRENCY_MAP.ETH) {
					return ctx.provider.getBalance(walletAddress);
				} else {
					const tokenContract = new ethers.Contract(address, erc20Abi, ctx.provider);
					return tokenContract.balanceOf(walletAddress);
				}
			};
			const promises = tokens.map(async (token) => {
				if (!ctx.provider || !walletAddress) return { balance: wei(0), token };
				const balance = await getBalance(token);
				return { balance: wei(balance, token.decimals ?? 18), token };
			});

			const data = await Promise.all(promises);
			return data.reduce((acc: TokenBalances, val) => {
				if (val.balance.lte(0)) return acc;
				acc[val.token.symbol] = val;
				return acc;
			}, {});
		},
		{
			enabled: !!ctx.provider && tokens.length > 0 && !!walletAddress,
			...options,
		}
	);
};

export default useTokensBalancesQuery;
