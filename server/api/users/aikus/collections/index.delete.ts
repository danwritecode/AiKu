import { useValidatedBody, z } from 'h3-zod'
import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'

const prisma = new PrismaClient()

/**
 * Deletes a AikuCollectionMap.
**/
export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const body = await useValidatedBody(event, z.object({
    mapIds: z.string().array(),
  }))

  await prisma.aikuCollectionMap.deleteMany({
    where: {
      id: {
        in: body.mapIds
      }
    }
  })

  return event.res.end()
})
