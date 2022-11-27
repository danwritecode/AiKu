<template>
  <div v-if="aikus">
    <!-- <Teleport to="#sort-target"> -->
    <!--   <SortDropdown @sort-dir="(dir) => sortSelected(dir)" /> -->
    <!-- </Teleport> -->
    <div class="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
      <AikuCard 
        v-for="aiku in aikusToRender" 
        :key="aiku.id" 
        :fields="{ aiku: aiku, collections: collections }" 
        @refetch-collections="getCollections()"
      />
    </div>
    <Pagination
      :page-num="pageNum"
      :page-size="pageSize"
      :is-last-page="isLastPage"
      :record-total="aikus.meta.totalCount"
      @next="pageNext()"
      @prev="pagePrev()"
    />
  </div>
</template>


<script setup lang="ts">
import { GetCollectionsByUserResp } from '~/server/api/users/collections/index.get'
import { GetAikusByUserResp } from '~/server/api/users/aikus/index.get'

const cursor = ref('')
const nextPageCursor = ref('')
const orderDir = ref<"asc" | "desc">('desc')
const pageNum = ref(1)
const leadingPageNum = ref(1)
const pageSize = ref(8)

// determines if were at the end of the list
const totalRecBrowsed = computed(() => {
  // total records browsed is pageNum times page size
  return pageNum.value * pageSize.value
})

const isLastPage = computed(() => {
  if(aikus.value) {
    return totalRecBrowsed.value >= aikus.value.meta.totalCount
  }
  return false
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

const { data: aikus, error } = await useAsyncData<GetAikusByUserResp>(
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

const sortSelected = (sortDir:"asc" | "desc") => {
  cursor.value = '' 
  pageNum.value = 1 
  leadingPageNum.value = 1 
  orderDir.value = 'desc' 
  aikusLoaded.value = []
  orderDir.value = sortDir
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
const { data:collections, error:collectionsError, refresh:getCollections } = await useFetch<GetCollectionsByUserResp>("/api/users/collections", {
  key: "collections",
  method: "GET",
  query: {
    orderDir: "desc"
  },
  headers: useRequestHeaders(['cookie']),
})

if(collectionsError.value) {
  console.log(collectionsError.value)
}
</script>
