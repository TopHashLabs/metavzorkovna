<script setup lang="ts">
import { useWeb3 } from '@/store/web3'
import { useContract } from '@/store/contract'
import { shorten } from '@/helpers/utils'
const web3 = useWeb3()
const contract = useContract()
const loading = ref<boolean>(false)

async function handleLogin(): Promise<void> {
  loading.value = true
  await web3.login()
  loading.value = false
}

async function switchChain(): Promise<void> {
  loading.value = true
  await web3.switchNetwork()
  loading.value = false
}

async function mint(): Promise<void> {
  // if (contract.whitelistSaleOpen) {
  //   loading.value = true
  //   await contract.whitelistMint(amount.value)
  //   loading.value = false
  //   return
  // }
  // loading.value = true
  // await contract.publicMint(amount.value)
  // loading.value = false
}

if (web3.isConnected) {
  handleLogin()
}
</script>

<template>
  <div>
    <BaseButton v-if="!web3.isConnected" @click="handleLogin" :loading="loading"
    underline
      >Connect Wallet</BaseButton
    >
    <BaseButton
      v-else-if="!web3.isRightChain"
      @click="switchChain"
      :loading="loading"
      underline
      >Switch Network</BaseButton
    >
    <BaseButton
      v-else
      underline
    >
      {{ shorten(web3.account)}}
    </BaseButton>
  </div>
</template>