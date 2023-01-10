import { useValidatedBody, z } from 'h3-zod'
import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()

/**
 * Creates new AikuCollectionMap.
**/
export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const body = await useValidatedBody(event, z.object({
    aikuId: z.string(),
    collectionId: z.string()
  }))
  
  await prisma.aikuCollectionMap.create({
    data: {
      id: uuidv4(),
      aikuId: body.aikuId,
      collectionId: body.collectionId
    }
  })

  return event.res.end()
})
