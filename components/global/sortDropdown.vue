<template>
  <div class="relative inline-block text-left">
    <div>
      <button @click="show = !show" type="button" class="inline-flex w-full justify-center rounded-md border border-zinc-300 dark:bg-zinc-800 px-4 py-2 text-sm font-medium dark:text-zinc-300 text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:ring-offset-zinc-800 transition-hover-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Sort
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="show" class="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md dark:bg-zinc-800 bg-white shadow-lg ring-1 dark:ring-white/5 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
          <button @click="sortSelected('desc')" type="button" :class="orderDir === 'desc' ? 'dark:bg-zinc-900 bg-zinc-200':''" class="text-left w-full dark:text-zinc-300 text-zinc-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most recent</button>
          <button @click="sortSelected('asc')" type="button" :class="orderDir === 'asc' ? 'dark:bg-zinc-900 bg-zinc-200':''" class="text-left w-full dark:text-zinc-300 text-zinc-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Oldest</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">

const emits = defineEmits(["sortDir"])

const show = ref(false)
const orderDir = ref<"asc" | "desc">('desc')

const sortSelected = (sortDir:"asc" | "desc") => {
  show.value = false
  orderDir.value = sortDir
  emits("sortDir", sortDir)
}
</script>
