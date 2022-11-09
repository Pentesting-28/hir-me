import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";

export const provider = new WalletConnectProvider({
//   infuraId: "e4ea80f8c3764a1ea0a582a4846d708c"
    rpc: {
        1: "https://mainnet.mycustomnode.com",
        3: "https://ropsten.mycustomnode.com",
        100: "https://dai.poa.network",
    // ...
    },
});
