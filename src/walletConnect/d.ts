declare module '@walletconnect/web3-provider/dist/umd/index.min.js' {
    import WalletConnectProvider from '@walletconnect/web3-provider/dist/esm/index';
    export default WalletConnectProvider
  }

  // global is not defined at index.ts vue walletConnect
  // https://stackoverflow.com/questions/71067299/walletconnect-fails-to-get-bundled-with-vite