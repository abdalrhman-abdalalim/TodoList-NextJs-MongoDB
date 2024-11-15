'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // ** Generate user model


  // ** Generate user model
  // await prisma.user.createMany({
  //   data: Array.from({length:15},()=>(
  //     {
  //       email:faker.internet.email(),
  //       name:faker.internet.username()
  //     }
  //   ))
  // })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })