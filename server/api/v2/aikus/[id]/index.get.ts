import { GetAikuResponse } from '~/models/strapi'

const config = useRuntimeConfig()

export default defineEventHandler(async (event):Promise<GetAikuResponse> => {
  const aikuId = event.context.params.id

  const response = await $fetch<GetAikuResponse>(`${config.strapiBase}/api/aikus/${aikuId}?populate=%2A`, {
    method: "GET",
    headers: {
      "Authorization": `bearer ${config.strapiToken}`,
      "Content-Type": "application/json"
    }
  })
  
  return response
})

