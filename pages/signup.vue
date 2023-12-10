<script setup lang="ts">
import 'cal-sans'
import { CalendarHeart, Circle, Link2, Users } from 'lucide-vue-next'

const FEATURES = [
  {
    title: 'Connect all your calendars',
    description: 'Cal.com reads availability from all your existing calendars.',
    icon: CalendarHeart,
  },
  {
    title: 'Set your availability',
    description: 'Set schedules for the times you want to be booked.',
    icon: Users,
  },
  {
    title: 'Share a link or embed',
    description: 'Share your Cal.com link or embed on your site.',
    icon: Link2,
  },
]
</script>

<template>
  <div class="flex min-h-screen w-full flex-col items-center justify-center bg-muted 2xl:bg-default">
    <div class="grid w-full max-w-[1440px] grid-cols-1 grid-rows-1 bg-muted lg:grid-cols-2 2xl:rounded-[20px] 2xl:border 2xl:border-subtle 2xl:py-6">
      <div class="flex w-full flex-col px-4 pt-6 sm:px-16 md:px-20 2xl:px-28">
        <div class="flex flex-col gap-2">
          <h1 class="font-cal text-[28px] leading-none">
            Create your account
          </h1>
          <p class="text-base font-medium leading-5 text-subtle">
            Cal.com provides scheduling infrastructure for absolutely everyone.
          </p>
        </div>
        <div class="mt-10">
          <form class="flex flex-col gap-4" action="">
            <div>
              <Label for="email" class="mb-2">Username</Label>
              <div class="group relative mb-1 flex items-center rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-default">
                <div class="addon-wrapper flex h-9 rounded-l-md border border-r-0 border-default px-3 [&:has(+_input:hover)]:border-emphasis [&:has(+_input:hover)]:border-r-default [input:hover_+_&]:border-emphasis [input:hover_+_&]:border-l-default">
                  <div class="min-h-9 flex flex-col justify-center text-sm leading-7 text-default">
                    <span class="flex whitespace-nowrap">http://localhost:3000/</span>
                  </div>
                </div>
                <Input placeholder="username" class="!my-0 mb-2 h-9 rounded-md rounded-l-none border-l-0 bg-default text-sm leading-4 text-emphasis !ring-0 transition placeholder:text-muted hover:border-emphasis focus:border-neutral-300 focus:ring-2 focus:ring-brand-default disabled:cursor-not-allowed disabled:bg-subtle disabled:hover:border-subtle" />
              </div>
              <!-- <div class="text-gray mt-2 flex items-center gap-x-2 text-sm text-red-700">
                <AlertCircle width="13" height="13" />
                <p>erorrs</p>
              </div> -->
            </div>
            <div>
              <Label for="email" class="mb-2">Email</Label>
              <Input placeholder="jdoe@example.com" class="mb-2 h-9 rounded-md bg-default text-sm leading-4 text-emphasis transition placeholder:text-muted hover:border-emphasis focus:border-neutral-300 focus:ring-2 focus:ring-brand-default disabled:cursor-not-allowed disabled:bg-subtle disabled:hover:border-subtle" />
            </div>
            <div>
              <Label for="email" class="mb-2">Password</Label>
              <div>
                <Input type="password" placeholder="•••••••••••••" class="mb-2 h-9 rounded-md bg-default text-sm leading-4 text-emphasis transition placeholder:text-muted hover:border-emphasis focus:border-neutral-300 focus:ring-2 focus:ring-brand-default disabled:cursor-not-allowed disabled:bg-subtle disabled:hover:border-subtle" />
              </div>
              <div class="text-gray mt-2 flex items-center text-sm text-default">
                <ul class="ml-2">
                  <li>
                    <Circle fill="currentColor" width="5" class="mx-1 inline-block" /> Mix of uppercase &amp; lowercase letters
                  </li>
                  <li>
                    <Circle fill="currentColor" width="5" class="mx-1 inline-block" /> Minimum 7 characters long
                  </li>
                  <li>
                    <Circle fill="currentColor" width="5" class="mx-1 inline-block" /> Contain at least 1 number
                  </li>
                </ul>
              </div>
            </div>
            <Button color="secondary" class="w-full justify-center rounded-md text-center">
              Create Account
            </Button>
          </form>
        </div>
        <div class="mt-10 flex h-full flex-col justify-end text-xs">
          <div class="flex gap-1">
            <p class="text-sm text-subtle">
              Already have an account?
            </p>
            <NuxtLink to="/login" class="text-sm text-emphasis hover:underline">
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="hidden w-full flex-col justify-between rounded-l-2xl border border-subtle py-12 pl-12 lg:flex" style="background: radial-gradient(162.05% 170% at 109.58% 35%, rgba(102, 117, 147, 0.7) 0%, rgba(212, 212, 213, 0.4) 100%)">
        <div
          class="rounded-l-2xl rounded-br-none border-dashed border-default py-[6px] pl-[6px]"
          style="backgroundColor: rgba(236,237,239,0.9)"
        >
          <NuxtImg src="/mock-event-type-list.svg" alt="#" width="663" height="550" />
        </div>
        <div class="mr-12 mt-8 grid h-full w-full grid-cols-3 gap-4 overflow-hidden">
          <div v-for="feature in FEATURES" :key="feature.title" class="flex flex-col leading-none">
            <div class="items-center text-emphasis">
              <component :is="feature.icon" class="mb-1 h-4 w-4" />
              <span class="text-sm font-medium">{{ feature.title }}</span>
            </div>
            <div class="text-sm text-subtle">
              <p>
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
