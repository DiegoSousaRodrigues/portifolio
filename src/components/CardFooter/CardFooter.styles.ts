import { w } from 'windstitch'

export const ExperienceCard = w.article(
  'flex items-center text-sm justify-between w-full rounded-3xl px-12 py-6 bg-gradient-to-b from-white/10 via-blue-500/10 to-white/5 shadow-[0_0_40px_rgba(59,130,246,0.08)]',
)

const contactButtonClasses = [
  'flex items-center gap-1',
  'rounded-2xl border border-[#4f8fff] px-10 py-4',
  'bg-[linear-gradient(180deg,#3b82ff_0%,#2563eb_58%,#1d4ed8_100%)]',
  'text-md text-white',
  'shadow-[0_0_26px_rgba(37,99,235,0.62),0_12px_32px_rgba(29,78,216,0.38)]',
  'transition-[filter,transform,box-shadow] duration-200 hover:brightness-105 active:translate-y-px cursor-pointer',
].join(' ')

export const ContactButton = w.button(contactButtonClasses)
