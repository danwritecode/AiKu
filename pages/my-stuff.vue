<template>
  <div v-if="aikus" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
    <div class="overflow-hidden rounded-lg dark:border dark:border-zinc-700 dark:bg-zinc-800 bg-zinc-50 shadow">
      <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
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
          <span class="dark:text-zinc-100 text-zinc-900">{{ aikus.meta.totalCount }}</span>
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

    <div class="mt-2 flex justify-end">
      <div class="relative inline-block text-left">
        <div>
          <button @click="showSortDropdown = !showSortDropdown" type="button" class="inline-flex w-full justify-center rounded-md border border-zinc-300 dark:bg-zinc-800 px-4 py-2 text-sm font-medium dark:text-zinc-300 text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:ring-offset-zinc-800 transition-hover-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Sort
            <!-- Heroicon name: mini/chevron-down -->
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 sclae-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div v-if="showSortDropdown" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md dark:bg-zinc-800 bg-white shadow-lg ring-1 dark:ring-white/5 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
              <button @click="cursor = null, pageNum = 1, leadingPageNum = 1, orderDir = 'desc', aikusLoaded = [], showSortDropdown = false" type="button" :class="orderDir === 'desc' ? 'dark:bg-zinc-900 bg-zinc-200':''" class="text-left w-full dark:text-zinc-300 text-zinc-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most recent</button>
              <button @click="cursor = null, pageNum = 1, leadingPageNum = 1, orderDir = 'asc', aikusLoaded = [], showSortDropdown = false" type="button" :class="orderDir === 'asc' ? 'dark:bg-zinc-900 bg-zinc-200':''" class="text-left w-full dark:text-zinc-300 text-zinc-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Oldest</button>
            </div>
          </div>
        </transition>
      </div>

    </div>

    <div class="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
      <AikuCard 
        v-for="aiku in aikusToRender" 
        :key="aiku.id.toString()" 
        :fields="{ aiku: aiku, collections: collections }" 
        @refetch-collections="getCollections()"
      />
    </div>

    <nav class="mt-2 flex items-center justify-between py-3" aria-label="Pagination">
      <div class="hidden sm:block">
        <p class="text-sm dark:text-zinc-300 text-zinc-700">
          Showing
          <span class="font-medium">{{ pageNum === 1 ? 1:(pageNum - 1) * pageSize }}</span>
          to
          <span class="font-medium">{{ isLastPage ?  aikus.meta.totalCount:((pageNum -1) * pageSize) + pageSize }}</span>
          of
          <span class="font-medium">{{ aikus.meta.totalCount }}</span>
          results
        </p>
      </div>
      <div class="flex flex-1 justify-between sm:justify-end">
        <button @click="pagePrev()" v-if="pageNum !== 1" type="button" class="relative inline-flex items-center rounded-md border border-zinc-300 dark:bg-zinc-800 px-4 py-2 text-sm font-medium dark:text-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-hover-300">Previous</button>
        <button v-else disabled type="button" class="relative inline-flex items-center rounded-md border dark:border-zinc-700 border-zinc-300 dark:bg-zinc-800 px-4 py-2 text-sm font-medium dark:text-zinc-600 text-zinc-400">Previous</button>
        <button v-if="!isLastPage" @click="pageNext()" type="button" class="relative ml-3 inline-flex items-center rounded-md border border-zinc-300 dark:bg-zinc-800 px-4 py-2 text-sm font-medium dark:text-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-hover-300">Next</button>
        <button v-else disabled type="button" class="relative ml-3 inline-flex items-center rounded-md border dark:border-zinc-700 border-zinc-300 dark:bg-zinc-800 px-4 py-2 text-sm font-medium dark:text-zinc-600 text-zinc-400">Next</button>
      </div>
    </nav>

  </div>
</template>


<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const user = useSupabaseUser()

const showSortDropdown = ref(false)
const cursor = ref('')
const nextPageCursor = ref('')
const orderDir = ref('desc')
const pageNum = ref(1)
const leadingPageNum = ref(1)
const pageSize = ref(8)

// determines if were at the end of the list
const totalRecBrowsed = computed(() => {
  // total records browsed is pageNum times page size
  return pageNum.value * pageSize.value
})

const isLastPage = computed(() => {
  return totalRecBrowsed.value >= aikus.value.meta.totalCount
})

/*
  This will hold all of our Aikus.
  As people paginate, we will just add to this array
  That way on previous navigations, we don't have to hit
  our DB again.
*/
const aikusLoaded = ref([])
// this will hold all aikus that should be visible in the frame
const aikusToRender = ref([])

const { data: aikus, error } = await useAsyncData(
  Date.now().toString() + orderDir.value + cursor.value,
  () => $fetch('/api/users/aikus', {
    query: {
      cursor: cursor.value,
      orderDir: orderDir.value,
      pageNum: pageNum.value,
      pageSize: pageSize.value
    },
    headers: useRequestHeaders(['cookie']),
  }),
  { watch: [orderDir, leadingPageNum] },
);

if(error.value) {
  console.log(error)
}

/**
  This method is called on initial load or change of Aikus.

  Purpose:
    1. Add to array of loaded Aikus (for caching)
    2. Set the cursor value for the Next page
    3. Update the array of Aikus that should be currently rendered
**/
const onAikuLoad = () => {
  aikusLoaded.value = aikusLoaded.value.concat(aikus.value.data)
  // get the ID of the LAST item in the array
  nextPageCursor.value = aikus.value.data[aikus.value.data.length - 1].id

  aikusToRender.value = aikus.value.data
}

if(aikus.value) {
  onAikuLoad()
}

watch(aikus, () => {
  onAikuLoad()
})

const pageNext = () => {
  // if our current page is equal to leading,
  // it means the next button needs fetch more, so we will
  // increment which will trigger API with watch
  if(pageNum.value === leadingPageNum.value) {
    // set the current cursor equal to the next cursor value
    // this means that when the API is called, the cursor it's using
    // is the cursor marking the end of the current page
    cursor.value = nextPageCursor.value
    leadingPageNum.value++
    pageNum.value++ 
    return
  }

  // if we're not on the leading page, then we just have to re-render
  pageNum.value++ 
  sliceRenderedAikus()
}

const pagePrev = () => {
  // for prev, we always just need to re-render, never refetch
  pageNum.value-- 
  sliceRenderedAikus()
}

/**
  The purpose of this function is to determine which aikus to render
  on the page based on the users position in the pages. 
  This saves enormous load on our server
**/
const sliceRenderedAikus = () => {
  const sliceStart = (pageNum.value * pageSize.value) - pageSize.value
  const sliceEnd = (pageNum.value * pageSize.value)

  // we need to slice from the loaded aikus
  aikusToRender.value = aikusLoaded.value.slice(sliceStart, sliceEnd)
}


// Collections
const { data:collections, error:collectionsError, refresh:getCollections } = await useFetch("/api/users/collections", {
  query: {
    orderDir: "desc"
  },
  headers: useRequestHeaders(['cookie']),
})

if(collectionsError.value) {
  console.log(collectionsError.value)
}

</script>
