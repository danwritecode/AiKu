<template>
  <div class="pt-20 mx-auto">
    <ClientOnly>
      <img v-if="imgUrl" :src="imgUrl" alt="">    
    </ClientOnly> 
  </div>
</template>

<script setup lang="ts">
const img = "https://cms.aiku.app/uploads/c44a5bde_637e_42ed_b4ca_034ce89c77d6_be9ff5341c.png"

const { data } = await useFetch("/api/images", {
  method: "POST",
  body: {
    "imgUrl": img,
    "screenH": 844,
	  "screenW": 390
  },
  responseType: "blob",
  server: false
})

const imgUrl = ref()

watch(data, () => {
  console.log(data.value)
  if(data.value instanceof Blob) {
    imgUrl.value = URL.createObjectURL(data.value)
  }
})

</script>
