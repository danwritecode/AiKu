import { useValidatedBody, z } from 'h3-zod'
import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()

/**
 * Create a Collection.
**/
export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const body = await useValidatedBody(event, z.object({
    name: z.string(),
  }))
  
  await prisma.collection.create({
    data: {
      id: uuidv4(),
      createdAt: new Date(),
      name: body.name,
      userId: user.id
    }
  })

  return event.res.end()
})
