import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'relative inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        button: '',
        icon: 'flex justify-center',
        fab: 'radix-state-open:rotate-45 md:radix-state-open:rotate-0 radix-state-open:shadown-none radix-state-open:ring-0 justify-center rounded-full !shadow-none md:rounded-md',
      },
      color: {
        primary:
          'focus-visible:ring-offset disabled:text-brand-subtle disabled:hover:text-brand-default bg-brand-default text-brand hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default disabled:bg-brand-subtle disabled:opacity-40 disabled:hover:bg-brand-subtle disabled:hover:opacity-40',
        secondary:
          'focus-visible:ring-offset focus-visible:ring-empthasis border  border-default bg-default text-emphasis hover:border-emphasis hover:bg-muted focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:border-subtle disabled:hover:bg-default disabled:hover:bg-opacity-30 disabled:hover:text-muted',
        minimal:
          'focus-visible:ring-offset focus-visible:ring-empthasis text-emphasis hover:bg-subtle focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:border-subtle disabled:hover:bg-transparent disabled:hover:text-muted',
        destructive:
          'focus-visible:ring-offset border border-default text-emphasis hover:border-red-100 hover:bg-error  hover:text-red-700 focus-visible:border-red-100 focus-visible:bg-error  focus-visible:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 disabled:border-red-200 disabled:bg-red-100 disabled:text-red-700 disabled:opacity-40 disabled:hover:border-red-200 dark:hover:text-red-100',
      },
      size: {
        sm: 'rounded-sm px-3 py-2 leading-4' /** For backwards compatibility */,
        base: 'h-9 px-4 py-2.5 ',
        lg: 'h-[36px] px-4 py-2.5 ',
      },
      loading: {
        true: 'cursor-wait',
      },
    },
    defaultVariants: {
      variant: 'button',
      color: 'primary',
      size: 'base',
    },
  },
)
