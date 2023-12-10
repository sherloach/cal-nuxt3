<script setup lang="ts">
import 'cal-sans'
import { AlertCircle } from 'lucide-vue-next'
import { z } from 'zod'

const validationSchema = toTypedSchema(
  z.object({
    email: z.string({ required_error: 'Please enter an email address' })
      .email({ message: 'Please enter a valid email address' }),
    password: z.string({ required_error: 'Please enter a password' })
      .min(4, { message: 'Password must be at least 4 characters' }),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
// async function onSubmit() {
// if (!data.value.email || !data.value.password)
//   return

// const { body } = await $fetch('/api/auth/login', {
//   method: 'POST',
//   body: data.value,
// })

// console.log({ body })
// }
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-subtle py-12">
    <h3 class="mx-auto mb-auto">
      <strong>
        <NuxtImg src="/logo.svg" alt="Cal" title="Cal" placeholder width="74" height="16" />
      </strong>
    </h3>
    <div class="text-center sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="font-cal text-3xl">
        Welcome back
      </h2>
    </div>
    <div class="mb-auto mt-8 w-full sm:mx-auto sm:max-w-md">
      <div class="mx-2 rounded-md border border-subtle bg-default px-4 py-10 sm:px-10">
        <form @submit.prevent="onSubmit">
          <div class="space-y-6">
            <div>
              <Label for="email" class="mb-2">Email address</Label>
              <Input v-model="email" type="email" placeholder="johndoe@example.com" class="rounded-md" />
              <div v-if="errors.email" class="text-gray mt-2 flex items-center gap-x-2 text-sm text-red-700">
                <AlertCircle width="13" height="13" />
                <p>{{ errors.email }}</p>
              </div>
            </div>
            <div>
              <Label for="password" class="mb-2">Password</Label>
              <Input v-model="password" type="password" placeholder="•••••••••••••" class="rounded-md" />
              <div v-if="errors.password" class="text-gray mt-2 flex items-center gap-x-2 text-sm text-red-700">
                <AlertCircle width="13" height="13" />
                <p>{{ errors.password }}</p>
              </div>
            </div>
            <Button type="submit" color="secondary" class="w-full justify-center bg-brand-default text-brand disabled:bg-[#9ca3af]">
              Sign in
            </Button>
          </div>
        </form>
      </div>
      <div class="mt-8 text-center text-sm text-default">
        <NuxtLink to="/signup" class="text-brand-500 font-medium">
          Don't have an account?
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
