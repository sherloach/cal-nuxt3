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
  <div class="py-12 min-h-screen flex flex-col justify-center items-center bg-subtle">
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
    <div class="mb-auto mt-8 sm:mx-auto w-full sm:max-w-md">
      <div class="bg-default border-subtle mx-2 rounded-md border px-4 py-10 sm:px-10">
        <form @submit.prevent="onSubmit">
          <div class="space-y-6">
            <div>
              <Label for="email" class="mb-2">Email address</Label>
              <Input v-model="email" type="email" placeholder="johndoe@example.com" />
              <div v-if="errors.email" class="text-gray mt-2 flex items-center gap-x-2 text-sm text-red-700">
                <AlertCircle width="13" height="13" />
                <p>{{ errors.email }}</p>
              </div>
            </div>
            <div>
              <Label for="password" class="mb-2">Password</Label>
              <Input v-model="password" type="password" placeholder="•••••••••••••" />
              <div v-if="errors.password" class="text-gray mt-2 flex items-center gap-x-2 text-sm text-red-700">
                <AlertCircle width="13" height="13" />
                <p>{{ errors.password }}</p>
              </div>
            </div>
            <Button class="bg-brand-default text-brand disabled:bg-[#9ca3af] w-full" type="submit">
              Sign in
            </Button>
          </div>
        </form>
      </div>
      <div class="text-default mt-8 text-center text-sm">
        <NuxtLink to="/signup" class="text-brand-500 font-medium">
          Don't have an account?
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
