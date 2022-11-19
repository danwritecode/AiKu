<template>
  <div class="flex items-center justify-center px-4 py-4 lg:py-16 w-full h-[80vh] lg:h-screen">

    <Head>
      <!-- Primary Meta Tags -->
      <Title>{{ aikuTitle }}</Title>
      <Meta name="title" content="AiKu" />
      <Meta name="description" :content="aikuDescription" />

      <!-- Open Graph / Facebook -->
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.aiku.app/" />
      <Meta property="og:title" :content="aikuTitle" />
      <Meta name="description" :content="aikuDescription" />
      <Meta property="og:image" :content="config.strapiBase + aiku.data.attributes.linkCard.data.attributes.url" />

      <!-- Twitter -->
      <Meta property="twitter:card" content="summary_large_image" />
      <Meta property="twitter:url" content="https://www.aiku.app/" />
      <Meta property="twitter:title" :content="aikuTitle" />
      <Meta name="description" :content="aikuDescription" />
      <Meta property="twitter:image" :content="config.strapiBase + aiku.data.attributes.linkCard.data.attributes.url" />
    </Head>

    <div class="relative h-full w-full max-w-2xl">
      <img :src="config.strapiBase + aiku.data.attributes.image.data.attributes.url" alt="" class="absolute inset-0 h-full w-full object-cover rounded-lg">
      <div class="absolute bottom-4 left-4 bg-black/50 p-4 rounded-lg">
        <p class="font-bold text-lg text-white">{{ aiku.data.attributes.lineOne }}</p> 
        <p class="font-bold text-lg text-white">{{ aiku.data.attributes.lineTwo }}</p> 
        <p class="font-bold text-lg text-white">{{ aiku.data.attributes.lineThree }}</p> 
        <p class="mt-2 font-base text-zinc-200">aiku.app</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const aikuId = route.params.id

const { data: aiku, error: getAikuError } = await useFetch(`/api/aikus/${aikuId}`)

const aikuTitle = computed(() => {
  return aiku.value.data.attributes.lineOne
})

const aikuDescription = computed(() => {
  return `${aiku.value.data.attributes.lineOne} ${aiku.value.data.attributes.lineTwo} ${aiku.value.data.attributes.lineThree}`
})

</script>
