<template>
  <div class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-zinc-200 dark:sm:divide-zinc-700 sm:py-0">
    <!-- Project name -->
    <div class="space-y-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:py-5">
      <div>
        <label for="collection-name" class="block text-sm font-medium dark:text-zinc-100 text-zinc-900 sm:mt-px sm:pt-2">Collection Name</label>
      </div>
      <div class="sm:col-span-2">
        <input :value="collectionName" type="text" name="project-name" id="project-name" class="block w-full rounded-md dark:bg-zinc-900 dark:text-zinc-200 border-zinc-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm transition-hover-300">
      </div>
    </div>

    <!-- Project description -->
    <div>
      <p class="block text-sm font-medium dark:text-zinc-100 text-zinc-900 sm:mt-px sm:pt-2">AiKus</p>    
      <div class="mt-2 grid grid-cols-4 gap-4">
        <img v-for="aikuCol in aikuColMap" :key="aikuCol.id" :src="aikuCol.aiku.sdUrl" alt="" class="rounded-lg">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

type ManageCollectionProps = {
  aikuColMap: any
  collectionName: string
}

const props = defineProps<ManageCollectionProps>()
</script>
