/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it).
  // const existing = await db.user.findUnique({
  //   where: { email: 'doylecodes@gmail.com' },
  // })
  // if (existing !== null) {
  //   await db.userRole.create({
  //     data: { name: 'super_admin', userId: existing.id },
  //   })
  // }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
