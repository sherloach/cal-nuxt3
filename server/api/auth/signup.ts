import { db } from '@/lib/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, email, password } = body
  let user

  try {
    user = await db.user.create({
      data: {
        username,
        email,
        password,
      },
    })
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create user',
    })
  }

  return { data: user }
})
