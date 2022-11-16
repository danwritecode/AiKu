<template>
  <div class="flex items-center justify-center px-4 py-4 lg:pt-10 lg:pb-20 w-full h-[80vh] lg:h-screen">
    <div class="h-full w-full max-w-2xl">
      <div>
        <button @click="downloadAiku()" class="text-zinc-400 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </button> 
      </div>
      <div id="aiku" class="relative h-full w-full max-w-2xl rounded-lg">
        <img :src="config.strapiBase + aiku.data.attributes.image.data.attributes.url" alt="" class="absolute inset-0 h-full w-full object-cover rounded-lg">
        <div class="absolute bottom-4 left-4 bg-black/50 p-4 rounded-lg">
          <p class="font-bold text-lg text-white">{{ aiku.data.attributes.lineOne }}</p> 
          <p class="font-bold text-lg text-white">{{ aiku.data.attributes.lineTwo }}</p> 
          <p class="font-bold text-lg text-white">{{ aiku.data.attributes.lineThree }}</p> 
          <p class="mt-2 font-base text-zinc-200">aiku.app</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import domtoimage from 'dom-to-image'

const route = useRoute()
const config = useRuntimeConfig()

const aikuId = route.params.id

const { data: aiku, error: getAikuError } = await useFetch(`/api/aikus/${aikuId}`)

const downloadAiku = async () => {
  const element = document.getElementById("aiku")
  try {
    const dataUrl = await domtoimage.toPng(element, { quality: 0.95})
    var link = document.createElement('a');
    link.download = `${aiku.value.data.id}_aiku.png`;
    link.href = dataUrl;
    link.click();
  } catch(error){
    console.log(error)
  }
}
</script>
