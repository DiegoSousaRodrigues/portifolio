import { w } from 'windstitch'

export const ExperienceCard = w.article(
  'flex items-center text-sm justify-between w-full rounded-3xl px-12 py-6 bg-gradient-to-b from-white/10 via-blue-500/10 to-white/5 shadow-[0_0_40px_rgba(59,130,246,0.08)]',
)

const contactButtonClasses = [
  'flex items-center gap-2',
  'rounded-[14px] border border-[#3a78ea] px-10 py-4',
  'bg-[linear-gradient(110deg,#1f58dc_0%,#2a68ea_58%,#4a8cff_100%)]',
  'text-md text-white',
  'shadow-[0_0_0_1px_rgba(125,170,255,0.16)_inset,0_0_10px_rgba(37,99,235,0.26),0_7px_16px_rgba(29,78,216,0.22)]',
  'transition-[filter,transform,box-shadow] duration-200 hover:brightness-[1.03] active:translate-y-px cursor-pointer',
].join(' ')

export const ContactButton = w.button(contactButtonClasses)
