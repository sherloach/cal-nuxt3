import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body
  login(email, password)
  return { body }
})

const loginSchema = z.object({
  email: z.string()
    .min(1, { message: 'Please enter an email address' })
    .email({ message: 'Please enter a valid email address' }),
  password: z.string().min(3, { message: 'Password must be at least 3 characters' }),
})

async function login(email: string, password: string) {
  const validateFields = loginSchema.safeParse({ email, password })
  console.log(validateFields)

  if (!validateFields.success) {
    console.log(validateFields.error)
    throw new Error(validateFields.error.issues[0].message)
  }
}
