<template>
  <div>
    <img v-if="imgUrl" :src="imgUrl" alt="">    
  </div>
</template>

<script setup lang="ts">
const img = "https://cms.aiku.app/uploads/29efe171_ef2a_4914_ac3a_8383432dd96a_43aa703f21.png"

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
