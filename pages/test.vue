<template>
  <div class="pt-20 mx-auto">
    <img v-if="imgUrl" :src="imgUrl" alt="">    
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

console.log(data.value)

const imgUrl = computed(() => {
  if(data.value instanceof Blob) {
    return URL.createObjectURL(data.value)
  }
  return null
})
</script>
