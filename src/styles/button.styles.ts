import { w } from 'windstitch'

export const PrimaryButton = w.a(
  [
    'flex items-center gap-2',
    'rounded-[14px] border border-primary-border px-8 py-3',
    'bg-primary-button text-base text-primary-foreground',
    'shadow-primary-button',
    'justify-center',
    'cursor-pointer transition-[filter,transform,box-shadow] duration-200',
    'hover:brightness-[1.03] active:translate-y-px',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
  ].join(' '),
  {
    variants: {
      fullWidth: (value: boolean) => (value ? 'w-full justify-center' : ''),
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
)
