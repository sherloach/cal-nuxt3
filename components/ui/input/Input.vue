<script setup lang="ts">
import { useAttrs } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const { class: className, ...rest } = useAttrs()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input v-model="modelValue" :class="cn('border-default mt-1 block w-full rounded-sm border px-3 py-2 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-800 sm:text-sm', className ?? '')" v-bind="rest">
</template>
