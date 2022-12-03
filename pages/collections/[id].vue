<template>
  <div v-if="collection && !collectionError" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
    <PageHeading 
      :header="collection.collection.name"
      sub-header="Manage the AiKu's in your collection here."
      button-text="Edit"
      :button-svg="pageHeadingSvg"
      button-color="violet"
      @button-pressed="openManagePanel()"
    />
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
      <AikuCard v-for="aikuCol in collection.collection.aikuCollectionMap" :key="aikuCol.id" :allow-manage="false" :aiku="aikuCol.aiku" />
    </div>

    <SidePanel v-if="showManagePanel" :animate="animateManagePanel" panel-title="Manage Collection" @close="closeManagePanel()">
      <PanelsManageCollection :aiku-col-map="collection.collection.aikuCollectionMap" :collection-name="collection.collection.name"/> 
    </SidePanel>

  </div>
</template>

<script setup lang="ts">
import { GetUserCollectionByIdResp } from "../../server/api/users/collections/[id].get"

const route = useRoute()

const colId = route.params.id

const { data:collection, error:collectionError } = await useFetch<GetUserCollectionByIdResp>("/api/users/collections/" + colId, {
  method: "GET",
  key: colId.toString(),
  headers: useRequestHeaders(['cookie']) as Record<string, string>
})

if (collectionError.value) {
  useNoti("error", "Uh oh", "There was an issue getting that collection")
}

const pageHeadingSvg = `
  <svg class="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
  </svg>
`


const showManagePanel = ref(false)
const animateManagePanel = ref(false)

const openManagePanel = () => {
  showManagePanel.value = true
  setTimeout(() => {
    animateManagePanel.value = true
  }, 1);
}

const closeManagePanel = () => {
  animateManagePanel.value = false
  setTimeout(() => {
    showManagePanel.value = false
  }, 500);
}
</script>
