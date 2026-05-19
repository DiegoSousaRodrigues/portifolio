import { w } from 'windstitch'

export const Wrapper = w.div(
  'flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between',
)

export const TitleBlock = w.div('flex flex-col gap-3')

export const Eyebrow = w.h2('text-xs font-bold text-primary')

export const Title = w.span('text-2xl font-bold')

export const ActionButton = w.a(
  'flex h-fit w-fit cursor-pointer items-center gap-4 rounded-lg border border-primary px-4 py-3 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
)
