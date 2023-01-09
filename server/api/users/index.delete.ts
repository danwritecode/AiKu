import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser, serverSupabaseServiceRole } from '#supabase/server'

const prisma = new PrismaClient()

/**
  * This endpoint deletes a user and their related data :(
**/
export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  // get the supabase client
  const client = serverSupabaseServiceRole(event)

  // get all collections for this user
  const collections = await getCollections(user.id)
  for (const col of collections) {
    // first delete all the mappings
    await deleteAikuColmap(col.id)
  }
  // Delete Collections
  await deleteCollections(user.id)

  // Delete AiKus
  await deleteAikus(user.id)

  // delete the user :(
  await client.auth.admin.deleteUser(user.id);

  return event.node.res.end()
})

const deleteAikuColmap = async (collectionId:string) => {
  await prisma.aikuCollectionMap.deleteMany({
    where: {
      collectionId: collectionId
    }
  }) 
}

const deleteCollections = async (userId:string) => {
  await prisma.collection.deleteMany({
    where: {
      userId: userId
    }
  }) 
}

const deleteAikus = async (userId:string) => {
  await prisma.aiku.deleteMany({
    where: {
      userId: userId
    }
  }) 
}

const getCollections = async (userId:string) => {
  return await prisma.collection.findMany({
    where: {
      userId: userId
    }
  })
}
