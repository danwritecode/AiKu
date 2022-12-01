<template>
  <div class="col-span-1 flex flex-col divide-y border dark:border-zinc-700 border-zinc-200 dark:divide-zinc-700 divide-zinc-200 rounded-lg dark:bg-zinc-800 bg-zinc-50">
    <div class="px-2 pt-1 pb-2">
      <p class="dark:text-zinc-300 text-zinc-800">{{ collection.name }}</p>
      <div :class="determineGridSize(collection)" class="mt-1 grid gap-2">
        <img v-for="aiku in collection.aikuCollectionMap" :class="determineImageHeight(collection)" class="rounded-lg object-cover w-full" :src="aiku.aiku.sdUrl" alt="">
      </div>
    </div>
    <div>
      <div class="-mt-px flex divide-x dark:divide-zinc-700 divide-zinc-200">
        <div class="flex w-0 flex-1">
          <button type="button" class="group relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-zinc-700 hover:text-zinc-500 dark:hover:text-zinc-100 transition-hover-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-zinc-400 group-hover:animate-spin">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <span class="ml-3 dark:text-zinc-300">Manage</span>
          </button>
        </div>
        <div v-if="opts.showView" class="-ml-px flex w-0 flex-1">
          <NuxtLink :to="'/collections/' + collection.id" class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-zinc-700 hover:text-zinc-500 dark:hover:text-zinc-100 transition-hover-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-zinc-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
            <span class="ml-3 dark:text-zinc-300">View</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collection } from "../../server/api/users/collections/[id].get"

type ColCardProps = {
  collection: Collection,
  opts: {
    showView:boolean
  }
}
defineProps<ColCardProps>()

const determineGridSize = (collection:Collection) => {
  const numRelAikus = collection.aikuCollectionMap.length
  if (numRelAikus >= 2) {
    return "grid-cols-2"
  }
  return "grid-cols-1"
}

const determineImageHeight = (collection:Collection) => {
  const numRelAikus = collection.aikuCollectionMap.length
  if (numRelAikus >= 4) {
    return "h-[8.75rem]"
  }
  return "h-72"
}
</script>
