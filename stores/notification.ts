import { defineStore } from 'pinia'

export type NotiType = "error" | "success"

export const useNotificationStore = defineStore('notification', () => {
  const showNoti = ref(false)
  const notiType:NotiType = ref(null)
  const notiTitle = ref('')
  const notiMessage = ref('')

  return { notiType, notiTitle, notiMessage, showNoti }
})
