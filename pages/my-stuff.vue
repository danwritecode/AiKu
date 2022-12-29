<template>
  <div v-if="user" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
    <div class="overflow-hidden rounded-lg dark:border dark:border-zinc-700 dark:bg-zinc-800 bg-zinc-50 shadow">
      <h2 class="sr-only" id="profile-overview-title">My Stuff</h2>
      <div class="dark:bg-zinc-800 bg-zinc-50 px-4 py-3">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="sm:flex sm:space-x-5">
            <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p class="text-xl font-bold dark:text-zinc-100 text-zinc-900 sm:text-2xl">{{ user.email }}</p>
              <p class="text-sm font-medium dark:text-zinc-400 text-zinc-600">AiKu Craftsman</p>
            </div>
          </div>
          <div class="mt-5 flex justify-center sm:mt-0">
            <a href="#" class="flex items-center justify-center rounded-md border dark:border-zinc-700 border-zinc-300 dark:bg-zinc-800 bg-zinc-50 px-4 py-2 text-sm font-medium dark:text-zinc-300 text-zinc-700 shadow-sm hover:bg-zinc-50">View profile</a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 divide-y dark:divide-zinc-700 divide-zinc-200 border-t dark:border-zinc-700 border-zinc-200 dark:bg-zinc-800 bg-zinc-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
        <div class="px-6 py-3 text-center text-sm font-medium">
          <!-- <span class="dark:text-zinc-100 text-zinc-900">{{ aikus.meta.totalCount }}</span> -->
          <span class="dark:text-zinc-300 text-zinc-600"> AiKus generated</span>
        </div>

        <div class="px-6 py-3 text-center text-sm font-medium">
          <span class="dark:text-zinc-100 text-zinc-900">2</span>
          <span class="dark:text-zinc-300 text-zinc-600"> Favorited</span>
        </div>

        <div class="px-6 py-3 text-center text-sm font-medium">
          <span class="dark:text-zinc-100 text-zinc-900">{{ collections.meta.totalCount }}</span>
          <span class="dark:text-zinc-300 text-zinc-600"> Collections</span>
        </div>
      </div>
    </div>

    <div class="mt-2 flex justify-between items-center">
      <div>
        <div class="flex items-center">
          <p class="mr-3 text-sm leading-5 dark:text-zinc-300 text-zinc-700">Showing</p>
          <fieldset>
            <legend class="sr-only">Showing</legend>
            <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-2">
              <div class="flex items-center">
                <input v-model="pageShowing" id="email" name="notification-method" value="aikus" type="radio" checked class="h-4 w-4 border-zinc-300 dark:bg-zinc-800 text-violet-600 focus:ring-violet-500 transition-hover-300">
                <label for="email" class="ml-1 block text-xs font-medium dark:text-zinc-400 text-zinc-700">AiKus</label>
              </div>
              <div class="flex items-center">
                <input v-model="pageShowing" id="sms" name="notification-method" value="collections" type="radio" class="h-4 w-4 border-zinc-300 dark:bg-zinc-800 text-violet-600 focus:ring-violet-500 transition-hover-300">
                <label for="sms" class="ml-1 block text-xs font-medium dark:text-zinc-400 text-zinc-700">Collections</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <!-- <div id="sort-target"></div> -->
    </div>

    <Transition name="fade" mode="out-in">
      <div v-if="pageShowing === 'aikus'" key="aiku">
        <ViewsUserAikus :collections="collections" @refetch-collections="getCollections()" />
      </div>
      <div v-else="pageShowing === 'collections'" key="collection">
        <ViewsUserCollections :collections="collections" />
      </div>
    </Transition>

  </div>
</template>


<script setup lang="ts">
import { GetCollectionsByUserResp } from '~/server/api/users/collections/index.get'

definePageMeta({
  middleware: 'auth'
})

const pageShowing = ref<"aikus" | "collections">("collections")

const user = useSupabaseUser()

const { data:collections, error:collectionsError, refresh:getCollections } = await useFetch("/api/users/collections", {
  key: "collections",
  method: "GET",
  query: {
    orderDir: "desc"
  },
  headers: useRequestHeaders(['cookie']) as Record<string,string>
})

if(collectionsError.value) {
  console.log(collectionsError.value)
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
