import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'
import { User } from '@supabase/supabase-js';
import { collection, aiku, aikuCollectionMap } from '~/prisma/client'

const prisma = new PrismaClient()

export type GetUserCollectionByIdResp = {
  collection: Collection
}

export type Collection = collection & {
  aikuCollectionMap: AikuCollectionMap[];
}

type AikuCollectionMap = aikuCollectionMap & {
  aiku: aiku;
}


/**
  * This endpoint returns a collection by Id for a User
  * TO DO: This has no pagination, will eventually become a problem
**/
export default defineEventHandler(async (event):Promise<GetUserCollectionByIdResp> => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const collectionId = event.context.params.id
  const collection = await getCollectionByIdAsync(collectionId, user)

  if (collection) {
    return {
      collection: collection
    }
  }
  throw createError({ statusCode: 404, message: "No collection with specified id owned by authenticated User"})
})

const getCollectionByIdAsync = async(id:string, user:User):Promise<Collection | null> => {
  return await prisma.collection.findFirst({
    where: {
      id: id,
      userId: user.id
    },
    include: {
      aikuCollectionMap: {
        include: {
          aiku: true
        }
      }
    }
  }) 
}
