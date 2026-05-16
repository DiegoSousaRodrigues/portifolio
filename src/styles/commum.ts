import { w, wx } from 'windstitch'

export const WrapperScreen = wx({
  className: 'flex flex-col gap-2 bg-gray-700 p-6 rounded-2xl',
  variants: {},
})

export const TitleScreen = wx({
  className: 'text-2xl font-bold',
  variants: {},
})

const primaryButtonClasses = [
  'flex items-center gap-2',
  'rounded-[14px] border border-[#3a78ea] px-8 py-3',
  'bg-[linear-gradient(110deg,#1f58dc_0%,#2a68ea_58%,#4a8cff_100%)]',
  'text-md text-white',
  'shadow-[0_0_0_1px_rgba(125,170,255,0.16)_inset,0_0_10px_rgba(37,99,235,0.26),0_7px_16px_rgba(29,78,216,0.22)]',
  'transition-[filter,transform,box-shadow] duration-200 hover:brightness-[1.03] active:translate-y-px cursor-pointer',
].join(' ')

export const PrimaryButton = w.button(primaryButtonClasses, {
  variants: {
    fullWidth: (value: boolean) => (value ? 'w-full justify-center' : ''),
  },
  defaultVariants: {
    fullWidth: false,
  },
})
