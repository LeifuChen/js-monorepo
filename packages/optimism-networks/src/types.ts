export type OptimismNetwork = {
	chainId: string;
	chainName: string;
	rpcUrls: string[];
	blockExplorerUrls: string[];
	iconUrls: string[];
	fraudProofWindow?: number;
};

export enum NetworkId {
	Mainnet = 10,
	Kovan = 69,
}

export type OptimismWatcher = {
	getMessageHashesFromL1Tx: (transactionHash: string) => string[];
	getMessageHashesFromL2Tx: (transactionHash: string) => string[];
	getL1TransactionReceipt: (msgHash: string, pollForPending: boolean) => string;
	getL2TransactionReceipt: (msgHash: string, pollForPending: boolean) => string;
};

export type LayerTwoNetworkId = number;
export type MessengerAddress = {
	L1: string;
	L2: string;
};

export type NetworkMapper = Record<number, number>;
