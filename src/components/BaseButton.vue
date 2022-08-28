<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean
    disabled?: boolean
    block?: boolean,
    underline?: boolean,
    color?: string
    size?: string
    icon?: string
    iconColor?: string
    href?: string
  }>(),
  {
    loading: false,
    disabled: false,
    block: false,
    underline: false,
    color: 'gray',
    size: 'normal', //normal, large
    iconColor: '#575EFF'
  }
)
const btnBorderColor = computed(() => {
  switch (props.color) {
    case 'gray': 
      return 'border border-[#333333]'
    case 'pink':
      return 'border-gradient not-italic hover:bg-white hover:text-black transition-all'
    default: 
      return 'border border-[#333333]'
  }
})
const fontSize = computed(() => {
  switch (props.size) {
    case 'large':
      return 'text-base'
    case 'normal':
      return 'text-sm'
    default:
      return 'text-sm'
  }
})
const textDecoration = computed(() => props.underline ? 'underline' : '')
const blockWidth = computed(() => props.block ? 'w-full' : 'px-[30px]')
const iconColor = computed(() => 'text-[#575EFF]')
const iconClasses = computed(() => [
  'ml-[8px]',
  iconColor.value
])
const btnClasses = computed(() => [
  btnBorderColor.value,
  fontSize.value,
  blockWidth.value,
  textDecoration.value,
  'leading-6 py-[13px] mobile:py-[8px] cursor-pointer font-semibold rounded-full bg-transparent rounded-full flex justify-center items-center',
  { 'cursor-not-allowed': props.disabled }
])
const tagIs = computed(() => props.href ? 'a' : 'button')
</script>
<template>
  <Component
    :is="tagIs"
    :href="href"
    target="_blank"
    :class="btnClasses"
  >
      <div class="flex items-center" v-if="!loading">
        <slot  />
        <BaseIcon v-if="icon" :class="iconClasses" :name="icon" size="sm"/>
      </div>
      <div v-else class="flex items-center space-x-2">
        <span>Loading...</span>
        <div style="border-top-color:transparent"
        class="w-3 h-3 border-2 border-white border-solid rounded-full animate-spin"></div>
      </div>
  </Component>
</template>
<style scoped>
.border-gradient {
  position: relative;
}

.border-gradient::before {
  --angle: 0deg;
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50px;
  padding: 1.5px; /* control the border thickness */
  background: conic-gradient(from var(--angle), #DC5AE0, transparent,transparent, #DC5AE0);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
  animation: 5s rotate linear infinite;
}

@keyframes rotate {
  0% {
    --angle: 0deg;
  }
  100% {
    --angle: 360deg;
  }
}
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

</style>