<template>
  <div :key="props.fields.aiku.id" class="relative rounded-lg xl:h-80 md:h-96 h-[30rem]">
    <img 
      :src="props.fields.aiku.sdUrl" 
      class="rounded-lg h-full w-full object-cover"
      v-if="!showManageCollection"
    >
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="showManageCollection" class="absolute inset-0 rounded-lg dark:bg-zinc-900 bg-zinc-200 z-10">
        <div v-if="fields.collections.data.length === 0" class="flex items-center justify-center h-full px-4">
          <div>
            <p class="text-sm dark:text-zinc-400 text-zinc-600">You don't have any collections yet, create one?</p>
            <div
              class="mt-3 rounded-md border px-3 py-1 border-zinc-300 focus-within:border-violet-600 focus-within:ring-violet-600 shadow-sm focus-within:ring-1 transition-hover-300"
            >
              <label for="new-collection" class="block text-xs font-medium dark:text-zinc-100 text-zinc-900">Collection name</label>
              <input 
                v-model="collectionName"
                type="text" 
                name="new-collection" 
                id="line-one" 
                class="bg-transparent block w-full border-0 p-0 text-zinc-800 dark:text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm" 
                placeholder="Collection Name Xyz">
              
            </div> 
            <SubmitButton 
              size="sm"
              color="violet"
              submit-text="Create"
              :submit-loading="addCollectionLoading"
              :is-valid-state="true"
              class="mt-2 w-full"
              @submit="createCollection()"
            />
          </div>
        </div>
        <div v-else class="pt-2.5">
          <div class="w-full">
            <div class="px-4">
              <fieldset>
                <legend class="text-sm font-bold dark:text-zinc-200 text-zinc-900">Add to collections</legend>
                <div class="mt-4 overflow-x-hidden overflow-y-auto h-56 sm:h-48 xl:h-36">
                  <div v-for="collection in props.fields.collections.data" class="relative flex items-start py-1">
                    <div class="min-w-0 flex-1 text-sm">
                      <label :for="collection.name" class="select-none font-medium dark:text-zinc-300 text-zinc-700">{{ collection.name }}</label>
                    </div>
                    <div class="ml-3 flex h-5 items-center">
                      <input v-if="colIdMapLoading !== collection.id" @input="modifyCollectionMap($event, collection.id)" :checked="aikuIsInCollection(collection.id)" :id="collection.name" :name="collection.name" type="checkbox" class="h-4 w-4 dark:bg-zinc-900 rounded border-zinc-300 text-violet-600 focus:ring-violet-500">
                      <svg v-if="colIdMapLoading === collection.id" class="h-4 w-4 animate-spin -ml-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div> 
            <div class="absolute bottom-4 w-full px-4">
              <p class="text-xs dark:text-zinc-400 text-zinc-600 font-bold">Add to new collection</p>
              <div
                class="mt-1 rounded-md border px-3 py-0.5 border-zinc-300 focus-within:border-violet-600 focus-within:ring-violet-600 shadow-sm focus-within:ring-1 transition-hover-300"
              >
                <label for="new-collection" class="block text-xs font-medium dark:text-zinc-100 text-zinc-900">Collection name</label>
                <input 
                  v-model="collectionName"
                  type="text" 
                  name="new-collection" 
                  id="line-one" 
                  class="bg-transparent block w-full border-0 p-0 text-zinc-800 dark:text-zinc-100 placeholder-zinc-500 focus:ring-0 text-xs" 
                  placeholder="Collection Name Xyz">
                
              </div> 
              <SubmitButton 
                size="xs"
                color="violet"
                submit-text="Create"
                :submit-loading="addCollectionLoading"
                :is-valid-state="true"
                class="mt-2 w-full"
                @submit="createCollection()"
              />
            </div>
          </div>

        </div>
      </div>
    </transition>
    <div>
      <button v-if="!showManageCollection" @click="setManageCollection()" type="button" class="z-20 absolute top-2 right-2 bg-zinc-900/75 rounded-full p-0.5 text-zinc-400 hover:text-white transition-hover-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button> 
      <button v-else @click="showManageCollection = false" type="button" class="z-20 absolute top-2 right-2 bg-zinc-900/75 rounded-full p-0.5 text-zinc-400 hover:text-white transition-hover-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </svg>
      </button> 
    </div>
    <div class="text-sm absolute bottom-2 left-2 bg-black/50 rounded-lg p-2">
      <p class="font-bold text-white">{{ props.fields.aiku.lineOne }}</p> 
      <p class="font-bold text-white">{{ props.fields.aiku.lineTwo }}</p> 
      <p class="font-bold text-white">{{ props.fields.aiku.lineThree }}</p> 
    </div>
  </div>
</template>

<script setup lang="ts">
// can't import these for some reason, I don't get it
// import { aiku, collection } from '~/prisma/client'

// temp setting these to any
type CardProps = {
  fields: {
    aiku: any,
    collections?: any
  }
}
const props = defineProps<CardProps>()

const emit = defineEmits(['refetchCollections'])

const showManageCollection = ref(false)

const setManageCollection = async () => {
  showManageCollection.value = true
  await getAikuColMap()
}

const { data:aikuColMap, refresh:getAikuColMap } = await useFetch("/api/v2/aikus/:id/collections", {
  key: props.fields.aiku.id + "_aikuColMap",
  immediate: false,
  query: {
    aikuId: props.fields.aiku.id
  },
  onRequestError({ error }) {
    console.log(error)
    useNoti("error", "Uh oh", "Something went wrong when getting the collections for that AiKu")
  }
})


const collectionName = ref('')
const addCollectionLoading = ref(false)

const createCollection = async () => {
  addCollectionLoading.value = true

  const { error } = await useFetch("/api/users/collections", {
    key: collectionName.value,
    method: "POST",
    body: {
      name: collectionName.value      
    }
  })

  addCollectionLoading.value = false

  if(error.value) {
    useNoti("error", "Uh oh", "We weren't able to create that collection :(") 
    return
  }
  
  // if no error
  collectionName.value = ''
  useNoti("success", "Nice", "We created that collection for you")

  emit('refetchCollections')
}


const colIdMapLoading = ref('')

const modifyCollectionMap = async (event:Event, collectionId:string) => {
  const el = event.target as HTMLInputElement
  // set loading state for that collection 
  colIdMapLoading.value = collectionId

  if(el.checked) {
    await addColMap(collectionId)
    await getAikuColMap()
    colIdMapLoading.value = ''
    return
  }

  // if not checked, then we remove
  try {
    const mapId = getMapId(collectionId)
    await removeColMap(mapId)
    await getAikuColMap()
    colIdMapLoading.value = ''
  } catch (error) {
    useNoti("error", "Uh oh", "An issue occured when trying to add the AiKu to the collection")   
  }
}

const addColMap = async (collectionId:string) => {
  const { error } = await useFetch("/api/users/aikus/collections", {
    key: collectionId,
    method: "POST",
    body: {
      aikuId: props.fields.aiku.id,
      collectionId: collectionId
    }
  })

  if(error.value) {
    useNoti("error", "Uh oh", "An error occured while adding AiKu to collection") 
  }
}

const removeColMap = async (mapId:string) => {
  const { error } = await useFetch("/api/users/aikus/collections", {
    key: mapId,
    method: "DELETE",
    body: {
      mapId: mapId,
    }
  })

  if(error.value) {
    useNoti("error", "Uh oh", "An error occured while removing AiKu from collection") 
  }
}

const aikuIsInCollection = (collectionId:string) => {
  if(aikuColMap.value) {
    const mappings = aikuColMap.value.filter(m => m.collectionId === collectionId)
    if(mappings.length > 0) {
      return true
    }
    return false
  }
  return false
}

const getMapId = (collectionId:string):string => {
  if(aikuColMap.value) {
    const mappings = aikuColMap.value.filter(m => m.collectionId === collectionId)
    if(mappings.length > 0) {
      return mappings[0].id
    }
  }
  throw "No Aiku Collection map found"
}

</script>
