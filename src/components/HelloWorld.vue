<script setup>

import { ref } from 'vue';

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

import StatusContainer from './StatusContainer.vue'
import connect from '../composables/connect/index.js';
// import { onMounted } from "vue";

const isOpen = ref(true)
let showMenu = ref(false);
const { connectWalletConnect, disconnectWallet, state } = connect();

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}

function toggleNav() {
  const toggleNav =  (showMenu.value = !showMenu.value);
  return { showMenu, toggleNav };
}

const connectUserWallet = async () => {
  await connectWalletConnect();
};

const disconnectUser = async() => {
    await disconnectWallet();
  }

const solutions = [
  {
    name: 'WalletConnect',
    description: '',
    href: connectUserWallet,
    icon: `
    <svg
      fill="none"
      height="48"
      viewBox="0 0 400 400"
      width="400"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <clipPath id="a">
        <path d="m0 0h400v400h-400z"/>
        </clipPath><g clip-path="url(#a)"><circle cx="200" cy="200" fill="#3396ff" r="199.5" stroke="#66b1ff"/><path d="m122.519 148.965c42.791-41.729 112.171-41.729 154.962 0l5.15 5.022c2.14 2.086 2.14 5.469 0 7.555l-17.617 17.18c-1.07 1.043-2.804 1.043-3.874 0l-7.087-6.911c-29.853-29.111-78.253-29.111-108.106 0l-7.59 7.401c-1.07 1.043-2.804 1.043-3.874 0l-17.617-17.18c-2.14-2.086-2.14-5.469 0-7.555zm191.397 35.529 15.679 15.29c2.14 2.086 2.14 5.469 0 7.555l-70.7 68.944c-2.139 2.087-5.608 2.087-7.748 0l-50.178-48.931c-.535-.522-1.402-.522-1.937 0l-50.178 48.931c-2.139 2.087-5.608 2.087-7.748 0l-70.7015-68.945c-2.1396-2.086-2.1396-5.469 0-7.555l15.6795-15.29c2.1396-2.086 5.6085-2.086 7.7481 0l50.1789 48.932c.535.522 1.402.522 1.937 0l50.177-48.932c2.139-2.087 5.608-2.087 7.748 0l50.179 48.932c.535.522 1.402.522 1.937 0l50.179-48.931c2.139-2.087 5.608-2.087 7.748 0z" fill="#fff"/></g></svg>
    `,
  },
  {
    name: 'Metamask',
    description: '',
    href: '##',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 212 189" fill="none"><g fill="none" fill-rule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"/><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"/><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"/><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"/><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"/><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/></g></g></svg>
    ` 
  }
];
/* ---- particles.js config ---- */

</script>





<template>
  <div class="bg-black">
    <nav
      class="
        container
        px-6
        py-3
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
            hover:text-indigo-400
          "
          >
            <h1 class="">
              <i class="fas fa-hard-hat fa-lg mr-3"></i>
              <span style="/*color: #28a745;*/">Hir</span><span class="text-white">-</span><span style="/*color: #356797*/">Me</span>
            </h1>
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <li class="text-gray-100 hover:text-indigo-400">Home</li>
        <li class="text-gray-100 hover:text-indigo-400">About</li>
        <li class="text-gray-100 hover:text-indigo-400">Blogs</li> 
        <!-- <li class="outline-green-500 text-green-500 hover:bg-green-600 hover:text-white ... outline outline-offset-1 outline-1 ... rounded  p-1">
          Connect wallet
        </li> -->
      </ul>

      <button
        @click="openModal"
        class="outline-green-500 text-green-500 hover:bg-green-600 hover:text-white ... outline outline-offset-1 outline-1 ... rounded  p-1">
        Connect wallet
      </button>
    </nav>
  </div>
  <!-- Header Start -->
    <div class="text-center">
      <br>
      <br>
      <br>
      <br>
      <h1 style="color: black;"> <b>Datos de Address y ChainId</b> </h1>
      <br>

      <div v-if="state.status">
        <button  @click="connectUserWallet" class="outline-green-500 text-green-500 hover:bg-green-600 hover:text-white ... outline outline-offset-1 outline-1 ... rounded  p-1">Connected</button>
        <br><br>
        <h1 style="color: black;"> <b>Address: {{state.address}}</b> </h1>
        <h1 style="color: black;"> <b>ChainId: {{state.chainId}}</b> </h1>
        <br><button  @click="disconnectUser" class="outline-red-600 text-red-600 hover:bg-red-600 hover:text-white ... outline outline-offset-1 outline-1 ... rounded  p-1">Disconnect</button>
      </div>
    </div>
  <!-- <div class="fixed inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Open dialog
    </button>
  </div> -->
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto" >
        <div
          class="flex min-h-full items-center justify-center p-4 text-center" 
        >
          <TransitionChild 
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel style="height: 34rem; max-width: 27rem;"
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg text-center font-medium leading-6 text-gray-900"
              >
              Connect your wallet

              </DialogTitle>
              <!-- <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div> -->
              <!-- <div
            class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
          > -->
          <div class="absolute  z-10 mt-3 w-screen max-w-sm  transform px-4 sm:px-0 lg:max-w-3x1">
            <div class="relative grid gap-8 items-center bg-white p-20">
              <button
                v-for="item in solutions"
                :key="item.name"
                v-on:click="item.href"
                
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                >
                  <div v-html="item.icon"></div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ item.description }}
                  </p>
                </div>
              </button>
              <!-- <button @click="connectUserWallet" class="button"> Connect Wallet</button> -->
            </div>
            <!-- <div class="bg-gray-50 p-4">
              <a
                href="##"
                class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <span class="flex items-center">
                  <span class="text-sm font-medium text-gray-900">
                    Documentation
                  </span>
                </span>
                <span class="block text-sm text-gray-500">
                  Start integrating products and tools
                </span>
              </a>
            </div> -->
          </div>
          <!-- </div> -->

              <div class="mt-4">
                <!-- <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button> -->
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<style scoped>
  .st0{fill:#E2761B;stroke:#E2761B;stroke-linecap:round;stroke-linejoin:round;}
	.st1{fill:#E4761B;stroke:#E4761B;stroke-linecap:round;stroke-linejoin:round;}
	.st2{fill:#D7C1B3;stroke:#D7C1B3;stroke-linecap:round;stroke-linejoin:round;}
	.st3{fill:#233447;stroke:#233447;stroke-linecap:round;stroke-linejoin:round;}
	.st4{fill:#CD6116;stroke:#CD6116;stroke-linecap:round;stroke-linejoin:round;}
	.st5{fill:#E4751F;stroke:#E4751F;stroke-linecap:round;stroke-linejoin:round;}
	.st6{fill:#F6851B;stroke:#F6851B;stroke-linecap:round;stroke-linejoin:round;}
	.st7{fill:#C0AD9E;stroke:#C0AD9E;stroke-linecap:round;stroke-linejoin:round;}
	.st8{fill:#161616;stroke:#161616;stroke-linecap:round;stroke-linejoin:round;}
	.st9{fill:#763D16;stroke:#763D16;stroke-linecap:round;stroke-linejoin:round;}
</style>