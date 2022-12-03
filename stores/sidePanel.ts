import { defineStore } from 'pinia'

export const useSidePanelStore = defineStore('sidePanel', () => {
  const show = ref(false)
  const animate = ref(false)
  const title = ref<string | null>()

  const component = ref()

  return { show, animate, title, component }
})
