import { useValidatedQuery, z } from 'h3-zod';
import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'
import { User } from '@supabase/supabase-js';
import { collection } from '~/prisma/client'

const prisma = new PrismaClient()

export type GetCollectionsByUserResp = {
  data: collection[],
  meta: Meta
}

type Meta = {
  totalCount: number
}

type Query = {
  orderDir?: "asc" | "desc",
}

/**
  * This endpoint returns all Collections for an Authenticated User
**/
export default defineEventHandler(async (event):Promise<GetCollectionsByUserResp> => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const query:Query = useValidatedQuery(event, z.object({
    orderDir: z.enum(["asc", "desc"]),
  }))

  const collections = await getCollectionsAsync(query, user)
  const numCollections:number = await getCollectionsCount(user)

  return {
    data: collections,
    meta: {
      totalCount: numCollections
    }
  }
})

const getCollectionsAsync = async(query:Query, user:User):Promise<collection[]> => {
  return await prisma.collection.findMany({
    orderBy: [
      {
        createdAt: query.orderDir
      }
    ],
    where: {
      userId: user.id
    }
  }) 
}

const getCollectionsCount = async(user:User):Promise<number> => {
  return await prisma.collection.count({
    where: {
      userId: user.id
    }
  }) 
}

