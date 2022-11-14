<template>
  <div>
    <img 
      id="diff-image"
      src="https://replicate.delivery/pbxt/ygtueiTM5A1HIK9YGmNsp81h2l1gRb9FEBfJXsJgzEQ9ld8PA/out-0.png"  
    >
  </div>
</template>

<script setup lang="ts">
if(process.client) {
  const img = document.getElementById("diff-image")
  const arrayBuffer = await img.arrayBuffer()
  console.log(arrayBuffer)
}

</script>
