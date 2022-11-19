<template>
  <div class="relative">
    <Html :class="isDark ? 'dark':''" >
      <Body class="dark:bg-zinc-800 bg-zinc-100"></Body>
    </Html>
    <nav class="lg:absolute top-2 left-2 flex items-center space-x-4 px-4 py-4 lg:px-0 lg:py-0">
      <button v-if="!haiku.showOverlay" @click="showNav = !showNav" class="inline-flex dark:text-zinc-500 text-zinc-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="showNav ? 'rotate-180':''" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button> 
      <div v-if="showNav && !haiku.showOverlay" class="flex items-center">
        <button @click="isDark = !isDark" type="button" class="dark:bg-zinc-600 bg-zinc-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 transition-hover-300" role="switch" aria-checked="false">
          <span class="sr-only">Use setting</span>
          <span aria-hidden="true" :class="isDark ? 'translate-x-5 bg-violet-500':'translate-x-0 dark:bg-zinc-400 bg-zinc-100'" class="pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"></span>
        </button>
      </div>
    </nav>

    <div v-if="haiku.showOverlay" class="px-4 pt-2 absolute z-10">
      <ShareHaiku />
    </div>

    <div v-show="!haiku.showOverlay">
      <slot />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useHaikuStore } from '~/stores/haiku'

const haiku = useHaikuStore()

const isDark = ref(true)
const showNav = ref(true)
</script>
