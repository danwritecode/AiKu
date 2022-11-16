<template>
  <div class="relative h-[80vh] shadow-2xl shadow-violet-600/50">
    <div class="absolute -top-8 right-0 flex items-center justify-between w-full">
      <button @click="downloadAiku()" type="button" class="inline-flex items-center focus:outline-none text-xs dark:text-zinc-100 text-zinc-800">
        Download
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6 dark:text-zinc-100 text-zinc-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      </button>
      <button @click="copyLink(`${config.public.baseUrl}/${haiku.strapiAikuId}`)" type="button" class="inline-flex items-center focus:outline-none text-xs dark:text-zinc-100 text-zinc-800">
        Copy Link 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6 dark:text-zinc-100 text-zinc-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
        </svg>
      </button>
      <button @click="haiku.showOverlay = false" type="button" class="inline-flex items-center focus:outline-none text-xs dark:text-zinc-100 text-zinc-800">
        Close 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6 dark:text-zinc-100 text-zinc-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div> 
    <img 
      :src="haiku.imgUrl" 
      class="lg:absolute inset-0 w-full h-full object-cover object-center rounded-lg"
    >
    <div class="absolute bottom-4 left-4 bg-black/50 rounded-lg p-4">
      <p class="font-bold text-lg text-white">{{ haiku.lineOne }}</p> 
      <p class="font-bold text-lg text-white">{{ haiku.lineTwo }}</p> 
      <p class="font-bold text-lg text-white">{{ haiku.lineThree }}</p> 
      <p class="mt-2 font-base text-zinc-200">aiku.app</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import domtoimage from 'dom-to-image'
import { useHaikuStore } from '~/stores/haiku'

const config = useRuntimeConfig()

const haiku = useHaikuStore()

const isCopied = ref<boolean>()
// SHARE
const copyLink = (url: string) => {
  try {
    navigator.clipboard.writeText(url);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 5000);
  } catch (e) {
    console.log(e);
  }
};

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
