import { useValidatedBody, z } from 'h3-zod'
import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()

/**
 * Update a Collection.
**/
export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const body = await useValidatedBody(event, z.object({
    id: z.string(),
    createdAt: z.string(),
    userId: z.string(),
    name: z.string()
  }))
  console.log(body)

  await prisma.collection.update({
    where: {
      id: body.id
    },
    data: {
      name: body.name
    }
  })

  return event.res.end()
})
