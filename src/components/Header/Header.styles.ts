import { MdArrowForward } from 'react-icons/md'
import { w } from 'windstitch'

export const Wrapper = w.div(
  'flex min-h-[60px] w-full min-w-0 items-center justify-between gap-3 text-primary-foreground',
)

export const Brand = w.div(
  'flex min-w-0 items-center gap-2 text-sm font-bold sm:text-base',
)

export const BrandName = w.span('truncate')

export const ConversationButton = w.a(
  'flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border-2 border-primary px-3 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary max-[380px]:px-2 sm:px-5 sm:py-3 sm:text-base',
)

export const ArrowIcon = w(MdArrowForward, {
  className: 'fill-primary',
})
