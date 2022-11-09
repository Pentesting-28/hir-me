import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import WalletConnectProvider from "@walletconnect/web3-provider";
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

// window.particlesJS.load('particles-js', 'assets/particles.json', function() {
//     console.log('callback - particles-js config loaded');
// });
// import VueConnectWallet from "vue-connect-wallet";
// import "vue-connect-wallet/dist/style.css";
// console.log(WalletConnectProvider)
createApp(App)
.use(router)
// .use(WalletConnectProvider)
// .use(VueConnectWallet)
.mount('#app')
