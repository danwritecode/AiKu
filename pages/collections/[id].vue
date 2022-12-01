<template>
  <div v-if="collection && !collectionError" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
    <div class="border-b dark:border-zinc-600 border-zinc-200 pb-5">
      <h3 class="text-lg font-medium leading-6 dark:text-zinc-100 text-zinc-900">{{ collection.collection.name }}</h3>
      <p class="mt-2 max-w-4xl text-sm dark:text-zinc-400 text-zinc-500">View and manage your collections.</p>
    </div>

    <div>
      <!-- <li v-for="collection in collection." :key="collection.id"> -->
      <!--   <AikuCard /> -->
      <!-- </li> -->
    </div>
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
</script>
