<template>
  <div class="space-y-6 py-6 sm:space-y-0 sm:py-0">
    <!-- Project name -->
    <div class="space-y-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:py-5">
      <div>
        <label for="collection-name" class="block text-sm font-medium dark:text-zinc-100 text-zinc-900 sm:mt-px sm:pt-2">Collection Name</label>
      </div>
      <div class="sm:col-span-2">
        <input :value="collectionName" type="text" name="project-name" id="project-name" class="block w-full rounded-md dark:bg-zinc-900 dark:text-zinc-200 border-zinc-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm transition-hover-300">
      </div>
    </div>

    <div>
      <p class="block text-sm font-medium dark:text-zinc-100 text-zinc-900 sm:mt-px sm:pt-2">AiKus</p>    
      <div class="mt-2 grid grid-cols-5 gap-4">
        <div v-for="aiku in aikus" :key="aiku.id" class="relative group">
          <button v-if="!aikusToRemove.has(aiku.id)" @click="aikusToRemove.add(aiku.id)" class="z-10 absolute top-0 right-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
          </button> 
          <button v-else @click="aikusToRemove.delete(aiku.id)" class="z-10 absolute top-0 right-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </button> 
          <img :src="aiku.sdUrl" :alt="aiku.lineOne" class="inset-0 rounded-lg">
          <div :class="aikusToRemove.has(aiku.id) ? 'bg-zinc-900/75':''" class="absolute inset-0 group-hover:bg-zinc-900/75 transition-hover-300"></div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full border-t dark:border-zinc-700 border-zinc-300">
      <div class="flex flex-shrink-0 justify-end px-4 py-4">
        <button type="button" class="rounded-md border border-zinc-300 dark:bg-transparent bg-white py-2 px-4 text-sm font-medium dark:text-zinc-300 text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-hover-300">cancel</button>
        <SubmitButton @submit="saveChanges()" :submit-text="aikusToRemove.size > 0 ? `save & remove ${aikusToRemove.size} AiKu(s) from ${collectionName}`:'save'" size="sm" color="violet" :submit-loading="false" :is-valid-state="true" class="ml-4"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { aiku } from '@prisma/client'

type ManageCollectionProps = {
  aikus: aiku[]
  collectionName: string
}

const props = defineProps<ManageCollectionProps>()

const saveChanges = () => {
  console.log("changes saved")
}

const aikusToRemove = ref<Set<string>>(new Set())
</script>
