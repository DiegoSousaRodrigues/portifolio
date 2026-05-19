import { w } from 'windstitch'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoIosFlash } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'

export const Wrapper = w.section(
  'flex flex-col gap-5 rounded-2xl border border-primary p-5 sm:p-8 lg:p-10',
)

export const Eyebrow = w.div(
  'flex items-center gap-2 text-xs font-bold text-primary',
)

export const Content = w.div('flex flex-col gap-6 lg:flex-row lg:gap-8')

export const Copy = w.div('flex flex-col gap-5')

export const Title = w.h2(
  'text-[32px] font-bold leading-[1.08] text-text-primary sm:text-[36px] lg:text-[44px]',
)

export const AccentText = w.span(
  'bg-heading-accent bg-clip-text text-transparent',
)

export const Actions = w.div('flex w-full flex-col gap-5 lg:max-w-[360px] lg:shrink-0')

export const PrimaryButtonLabel = w.span('whitespace-nowrap')

export const SecondaryActions = w.div('grid grid-cols-1 gap-3 sm:grid-cols-2')

export const SecondaryButton = w.a(
  'flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl border border-primary p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
)

export const FooterNote = w.div('flex items-start gap-2 text-sm leading-6 text-text-secondary')

export const EmailIcon = w(MdOutlineEmail, {
  className: 'fill-primary',
})

export const LinkedinIcon = w(FaLinkedinIn, {
  className: 'fill-primary',
})

export const FlashIcon = w(IoIosFlash, {
  className: 'fill-primary',
})
