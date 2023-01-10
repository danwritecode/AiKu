<template>
  <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <transition
      enter-active-class="transform ease-out duration-500 transition"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button v-if="animate" class="fixed inset-0 bg-zinc-900/75"></button>
    </transition>

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
          <transition
            enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
          >
            <div v-if="animate" class="pointer-events-auto w-screen max-w-2xl">
              <div class="flex h-full flex-col dark:bg-zinc-900 bg-zinc-100 pt-6 shadow-xl">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium dark:text-zinc-200 text-zinc-800" id="slide-over-title">{{ panelTitle }}</h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button @click="$emit('close')" type="button" class="rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none transition-hover-300">
                        <span class="sr-only">Close panel</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative mt-6 flex-1 px-4 sm:px-6">
                  <slot />
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
defineProps({
  animate: {
    type: Boolean,
    required: true
  },
  panelTitle: {
    type: String,
    required: true
  }
})

defineEmits(["close"])
</script>
