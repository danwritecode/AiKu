<template>
  <NuxtLayout>
    <NuxtPage />
    <Notification />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

html {
  font-family: 'Space Mono', monospace;
  overflow-y: overlay;
}
.layout-enter-from {
  opacity: 0;
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
.page-enter-from {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track-piece {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #3f3f46;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #52525b;
}
</style>
