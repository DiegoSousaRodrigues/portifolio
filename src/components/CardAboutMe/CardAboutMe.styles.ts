import { w } from 'windstitch'
import { IoCodeSlash, IoFlashOutline } from 'react-icons/io5'
import { MdOutlineRocketLaunch } from 'react-icons/md'

export const Wrapper = w.section('flex flex-col gap-6 md:flex-row md:gap-8')

export const Copy = w.div('flex w-full flex-col gap-4')

export const HeadingGroup = w.div('flex flex-col gap-3')

export const Eyebrow = w.h2('text-xs font-bold text-primary')

export const Title = w.span('text-2xl font-bold')

export const CardsList = w.div(
  'grid w-full grid-cols-1 gap-3 sm:grid-cols-3 md:w-2/3 md:justify-end',
)

export const InfoCard = w.div(
  'relative min-h-[132px] overflow-hidden rounded-[18px] bg-info-card p-px shadow-info-card sm:aspect-square sm:min-h-[142px]',
)

export const InfoCardContent = w.div(
  'relative flex h-full flex-col items-center justify-center rounded-[17px] border border-border-faint bg-surface-deep/95 px-4 text-center backdrop-blur-xl',
)

export const InfoIcon = w.div(
  'mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-2xl bg-info-icon text-[26px] text-primary shadow-info-icon',
)

export const InfoTitle = w.span(
  'text-[19px] font-bold leading-none tracking-normal text-text-primary',
)

export const InfoDescription = w.span(
  'mt-2 text-sm font-medium leading-none tracking-normal text-text-secondary',
)

const infoIconClasses = 'drop-shadow-primary-glow'

export const CodeIcon = w(IoCodeSlash, {
  className: infoIconClasses,
})

export const RocketIcon = w(MdOutlineRocketLaunch, {
  className: infoIconClasses,
})

export const FlashIcon = w(IoFlashOutline, {
  className: infoIconClasses,
})
