<template>
  <div class="flex items-center">

    <!--Submit Buttons-->
    <button
      v-if="props.isValidState && !props.submitLoading"
      @click="$emit('submit')"
      type="button"
      :class="[bttnSize, colorClasses]"
      class="w-full inline-flex items-center justify-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-1 transition-hover-300"
    >
     {{ props.submitText }}
    </button>
    <button
      v-if="!props.isValidState && !props.submitLoading"
      type="button"
      disabled
      :class="[bttnSize, colorClassesDisabled]"
      class="w-full inline-flex items-center justify-center border border-transparent font-medium rounded shadow-sm"
    >
     {{ props.submitText }}
    </button>
    <button v-if="props.submitLoading" type="button" :class="[colorClassesDisabled, bttnSize]" class="w-full inline-flex items-center justify-center justify-center border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-default" disabled>
      <svg :class="spinnerSize" class="animate-spin -ml-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      {{ props.submitText }}
    </button>

  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

type ButtonSizes = "xs" | "sm" | "md" | "lg" | "xl"

const props = defineProps({
  submitText: {
    type: String,
    default: "Submit"
  },
  color: {
    type: String,
    required: true
  },
  colorInverted: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<ButtonSizes>,
    required: true,
    default: "md"
  },
  isValidState: {
    type: Boolean,
    required: true
  },
  submitLoading: {
    type: Boolean,
    required: true,
    default: false
  }
})

const colorClasses = computed(() => {
  if(props.colorInverted) {
    return `bg-${props.color}-200 text-${props.color}-600 hover:bg-${props.color}-300 focus:ring-${props.color}-500`
  } else {
    return `bg-${props.color}-600 text-white hover:bg-${props.color}-700 focus:ring-${props.color}-500`
  }

})

const bttnSize = computed(() => {
  const size = props.size
  if(size === 'xs') {
    return 'px-2.5 py-1.5 text-xs'
  } else if(size === 'sm') {
    return 'px-3 py-2 text-sm leading-4'
  } else if(size === 'md') {
    return 'px-4 py-2 text-sm'
  } else if(size === 'lg') {
    return 'px-4 py-2 text-base'
  } else if(size === 'xl') {
    return 'px-6 py-3 text-base'
  } else {
    return 'px-4 py-2'
  }
})

const spinnerSize = computed(() => {
  const size = props.size
  if(size === 'xs') {
    return 'h-2 w-2 mr-1'
  } else if(size === 'sm') {
    return 'h-2.5 w-2.5 mr-2'
  } else if(size === 'md') {
    return 'h-3 w-3 mr-2.5'
  } else if(size === 'lg') {
    return 'h-4 w-4 mr-3'
  } else if(size === 'xl') {
    return 'h-5 w-5 mr-3'
  } else {
    return 'h-3 w-3 mr-3'
  }
})

const colorClassesDisabled = computed(() => {
  if(props.colorInverted) {
    return `bg-${props.color}-200 text-${props.color}-400`
  } else {
    return `bg-${props.color}-500 text-${props.color}-200`
  }
})
</script>
