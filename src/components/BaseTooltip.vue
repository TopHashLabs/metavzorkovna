<script setup lang="ts">
defineProps<{
    text?: string
}>()
</script>

<template>
  <div class="relative inline-block group">
    <slot />
    <div
      class="group-hover:opacity-100 text-white text-base text-center p-4 max-w-[352px] rounded-md opacity-0 absolute transition-opacity bg-[#212121]/60 z-[1]"
    >
     {{ text }}
    </div>
  </div>
</template>