<template>
  <div class="space-y-6 py-6 sm:space-y-0 sm:py-0">
    <!-- Project name -->
    <div class="space-y-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:py-5">
      <div>
        <label for="collection-name" class="block text-sm font-medium dark:text-zinc-100 text-zinc-900 sm:mt-px sm:pt-2">Collection Name</label>
      </div>
      <div class="sm:col-span-2">
        <input v-model="newCollectionName" type="text" name="project-name" id="project-name" class="block w-full rounded-md dark:bg-zinc-900 dark:text-zinc-200 border-zinc-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm transition-hover-300">
      </div>
    </div>

    <div>
      <h6 class="block text-base font-medium dark:text-zinc-100 text-zinc-900 sm:mt-px sm:pt-2">Remove AiKus</h6>    
      <p class="text-sm text-zinc-500">Remove AiKus from the collection. Removing does not delete the AiKu.</p>
        <transition-group name="list" tag="div" class="mt-3 grid grid-cols-5 gap-4">
          <div v-for="map in collection.aikuCollectionMap" :key="map.id" class="relative group">
            <button v-if="!aikusToRemove.has(map.id)" @click="aikusToRemove.add(map.id)" class="z-10 absolute top-0 right-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
              </svg>
            </button> 
            <button v-else @click="aikusToRemove.delete(map.id)" class="z-10 absolute top-0 right-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            </button> 
            <img :src="map.aiku.sdUrl" :alt="map.aiku.lineOne" class="inset-0 rounded-lg">
            <div :class="aikusToRemove.has(map.id) ? 'bg-zinc-900/75':''" class="absolute inset-0 group-hover:bg-zinc-900/75 transition-hover-300"></div>
          </div>
        </transition-group>
    </div>

    <div class="absolute bottom-0 left-0 w-full border-t dark:border-zinc-700 border-zinc-300">
      <div class="flex flex-shrink-0 justify-end px-4 py-4">
        <button @click="emits('close')" type="button" class="rounded-md border border-zinc-300 dark:bg-transparent bg-white py-2 px-4 text-sm font-medium dark:text-zinc-300 text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-transparent focus:ring-offset-2 transition-hover-300">cancel</button>
        <SubmitButton @submit="saveChanges()" :submit-text="aikusToRemove.size > 0 ? `save & remove ${aikusToRemove.size} AiKu(s)`:'save'" size="sm" color="violet" :submit-loading="saveLoading" :is-valid-state="aikusToRemove.size > 0 || newCollectionName !== ''" class="ml-4"/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { collection } from "@prisma/client"
import { Collection } from "../../server/api/users/collections/[id].get"

type ManageCollectionProps = {
  collection: Collection
  collectionName: string
}

const props = defineProps<ManageCollectionProps>()
const emits = defineEmits(["refetch-collection", "close"])

const newCollectionName = ref('')
newCollectionName.value = props.collectionName

const aikusToRemove = ref<Set<string>>(new Set([]))
const aikusToRemoveList = computed(() => {
  let aikus = []
  for (const aiku of aikusToRemove.value) {
    aikus.push(aiku)
  }
  return aikus
})

const saveLoading = ref(false)

const saveChanges = async () => {
  saveLoading.value = true
  await removeAikus()
  await updateAttributes()

  emits("refetch-collection")
  saveLoading.value = false
}

const updateAttributes = async () => {
  const { error } = await useFetch('/api/users/collections', {
    method: 'PUT',
    body: {
      id: props.collection.id,
      createdAt: props.collection.createdAt,
      userId: props.collection.userId,
      name: newCollectionName,
    }
  })

  if (error.value) {
    console.log(error.value)
    useNoti("error", "Uh oh", "There was an issue updating collection attributes")
    emits("close")
    return;
  }
}

const removeAikus = async () => {
  // TO DO: there's probably a bulk delete option... 
  const { error } = await useFetch('/api/users/aikus/collections', {
    method: 'DELETE',
    body: {
      mapIds: aikusToRemoveList
    }
  })

  if (error.value) {
    console.log(error.value)
    useNoti("error", "Uh oh", "There was an issue removing those AiKus from the collection")
    emits("close")
    return;
  }

  aikusToRemove.value.clear()
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
