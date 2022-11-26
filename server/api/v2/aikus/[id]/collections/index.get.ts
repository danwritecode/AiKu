import { useValidatedQuery, z } from 'h3-zod';
import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'
import { aiku } from '~/prisma/client'

const prisma = new PrismaClient()


type Query = {
  aikuId?: string
}

/**
  * This endpoint returns all Collections for an Authenticated User
**/
export default defineEventHandler(async (event)=> {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const query:Query = useValidatedQuery(event, z.object({
    aikuId: z.string(),
  }))

  // Get the AiKu and ensure it's owned by the requesting user.
  // Otherwise throw an unauthorized error
  const aiku = await prisma.aiku.findUnique({
    where: {
      id: query.aikuId
    }
  })

  if(!aiku) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  return await prisma.aikuCollectionMap.findMany({
    where: {
      aikuId: query.aikuId 
    },
    include: {
      collection: true,
      aiku: true
    }
  }) 
})

// const getCollectionsAsync = async(aikuId:string):Promise<aikuCollectionMap[]> => {
//   return await prisma.aikuCollectionMap.findMany({
//     where: {
//       aikuId: aikuId 
//     },
//     include: {
//       collection: true
//     }
//   }) 
// }
//
// const getCollectionsCount = async(user:User):Promise<number> => {
//   return await prisma.collection.count({
//     where: {
//       userId: user.id
//     }
//   }) 
// }

