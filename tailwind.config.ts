import animate from 'tailwindcss-animate'
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const subtleColor = '#E5E7EB'
module.exports = {
  darkMode: ['class'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        cal: ['Cal Sans', 'Cal Sans fallback'],
        sans: ['Inter', 'Inter fallback', ...fontFamily.sans],
      },
      colors: {
        emphasis: 'var(--cal-bg-emphasis)',
        default: 'var(--cal-bg, white)',
        subtle: 'var(--cal-bg-subtle)',
        muted: 'var(--cal-bg-muted)',
        inverted: 'var(--cal-bg-inverted)',
        info: 'var(--cal-bg-info)',
        success: 'var(--cal-bg-success)',
        attention: 'var(--cal-bg-attention)',
        error: 'var(--cal-bg-error)',
        darkerror: 'var(--cal-bg-dark-error)',
        black: '#111111',
        brand: {
          default: 'var(--cal-brand,#111827)',
          emphasis: 'var(--cal-brand-emphasis,#101010)',
          subtle: 'var(--cal-brand-subtle,#9CA3AF)',
          accent: 'var(--cal-brand-accent,white)',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        darkgray: {
          50: '#101010',
          100: '#1c1c1c',
          200: '#2b2b2b',
          300: '#444444',
          400: '#575757',
          500: '#767676',
          600: '#a5a5a5',
          700: '#d6d6d6',
          800: '#e8e8e8',
          900: '#f3f4f6',
        },
      },
      borderColor: {
        emphasis: 'var(--cal-border-emphasis, #9CA3AF)',
        default: 'var(--cal-border, #D1D5DB)',
        subtle: `var(--cal-border-subtle, ${subtleColor})`,
        muted: 'var(--cal-border-muted, #F3F4F6)',
        booker: `var(--cal-border-booker, ${subtleColor})`,
        error: 'var(--cal-border-error, #AA2E26)',
      },
      textColor: {
        emphasis: 'var(--cal-text-emphasis, #111827)',
        default: 'var(--cal-text, #374151)',
        subtle: 'var(--cal-text-subtle, #6B7280)',
        muted: 'var(--cal-text-muted, #9CA3AF)',
        inverted: 'var(--cal-text-inverted, white)',
        info: 'var(--cal-text-info, #253985)',
        success: 'var(--cal-text-success, #285231)',
        attention: 'var(--cal-text-attention, #73321B)',
        error: 'var(--cal-text-error, #752522)',
        brand: 'var(--cal-brand-text,\'white\')',
      },
      fill: {
        emphasis: 'var(--cal-text-emphasis, #111827)',
        default: 'var(--cal-text, #374151)',
        subtle: 'var(--cal-text-subtle, #6B7280)',
        muted: 'var(--cal-text-muted, #9CA3AF)',
        inverted: 'var(--cal-text-inverted, white)',
        info: 'var(--cal-text-info, #253985)',
        success: 'var(--cal-text-success, #285231)',
        attention: 'var(--cal-text-attention, #73321B)',
        error: 'var(--cal-text-error, #752522)',
        brand: 'var(--cal-brand-text)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [animate],
}
