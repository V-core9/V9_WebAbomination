import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  console.time('sample_create_posts()')
  const createPost = await prisma.post.create({ data: { title: "Hello World", content: "Hello World", published: true, authorId: 1 } })
  console.log("CREATE POST: ", createPost)
  console.timeEnd('sample_create_posts()')

  console.time('findUsers()')
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  })
  console.dir(allUsers)
  console.timeEnd('findUsers()')

  console.time('find_posts()')
  const allPosts = await prisma.post.findMany({
    include: { author: true },
  })
  console.log("ALL POSTS: ", allPosts)
  console.timeEnd('find_posts()')
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
