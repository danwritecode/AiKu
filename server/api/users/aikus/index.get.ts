import { useValidatedQuery, z } from 'h3-zod';
import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'
import { User } from '@supabase/supabase-js';
import { H3Event } from 'h3'
import { aiku } from '~/prisma/client'

const prisma = new PrismaClient()

export type GetAikusByUserResp = {
  data: aiku[],
  meta: Meta
}

type Meta = {
  totalCount: number
}


type Query = {
  cursor?: string,
  orderDir?: "asc" | "desc",
  pageNum?: string,
  pageSize?: string
}

/**
  * This endpoint returns all AiKus for an authenticated User
**/
export default defineEventHandler(async (event):Promise<GetAikusByUserResp> => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const query:Query = useValidatedQuery(event, z.object({
    cursor: z.string(),
    orderDir: z.enum(["asc", "desc"]),
    pageNum: z.string(),
    pageSize: z.string()
  }))

  console.log(query)

  let aikus:aiku[];

  if(query.cursor && query.pageNum) {
    aikus = await getAikusCursorAsync(query, user)
  } else {
    aikus = await getAikusAsync(query, user)
  }

  const numAikus:number = await getAikusCount(user)

  return {
    data: aikus,
    meta: {
      totalCount: numAikus
    }
  }


})

const getAikusAsync = async(query:Query, user:User):Promise<aiku[]> => {
  return await prisma.aiku.findMany({
    orderBy: [
      {
        createdAt: query.orderDir
      }
    ],
    take: parseInt(query.pageSize),
    where: {
      userId: user.id
    }
  }) 
}

const getAikusCursorAsync = async(query:Query, user:User):Promise<aiku[]> => {
  return await prisma.aiku.findMany({
    orderBy: [
      {
        createdAt: query.orderDir
      }
    ],
    take: parseInt(query.pageSize),
    skip: 1, // always skip one to avoid the cursor, more here: https://www.prisma.io/docs/concepts/components/prisma-client/pagination#do-i-always-have-to-skip-1
    cursor: {
      id: query.cursor
    },
    where: {
      userId: user.id
    }
  }) 
}

const getAikusCount = async(user:User):Promise<number> => {
  return await prisma.aiku.count({
    where: {
      userId: user.id
    }
  }) 
}

