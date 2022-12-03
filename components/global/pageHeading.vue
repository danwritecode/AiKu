<template>
  <div class="lg:flex lg:items-center lg:justify-between border-b border-zinc-600 pb-2">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 dark:text-zinc-100 text-zinc-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ header }}</h2>
      <p class="mt-2 max-w-4xl text-sm dark:text-zinc-400 text-zinc-500">{{ subHeader }}</p>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
      <span class="hidden sm:block">
        <button 
          type="button" 
          :class="buttonColorClasses"
          class="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-hover-300"
          @click="$emit('buttonPressed')"
        >
          <div v-html="buttonSvg" class="h-auto w-auto"></div>
          {{ buttonText }}
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineEmits(["buttonPressed"])

type ButtonColors = "zinc" | "violet" 

const props = defineProps({
  header: {
    type: String,
    required: true
  },
  subHeader: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonSvg: {
    type: String,
    required: true
  },
  buttonColor: {
    type: String as PropType<ButtonColors>,
    required: true
  }
})

const buttonColorClasses = computed(() => {
  return `bg-${props.buttonColor}-600 hover:bg-${props.buttonColor}-700 focus:ring-${props.buttonColor}-500 focus:ring-offset-${props.buttonColor}-800`
})
</script>
