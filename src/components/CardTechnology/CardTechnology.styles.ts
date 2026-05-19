import Image from 'next/image'
import { w } from 'windstitch'

export const Wrapper = w.section('flex flex-col gap-4')

export const TechnologyList = w.div(
  'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4',
)

export const TechnologyImage = w(Image, {
  className: 'h-8 w-8 object-contain',
})

export const TechnologyGroup = w.div('flex min-w-0 flex-col')

export const TechnologyGroupLabel = w.span(
  'text-xxs capitalize text-text-muted',
)

export const TechnologyGroupContent = w.div(
  'grid grid-cols-[repeat(auto-fit,minmax(32px,1fr))] gap-4 rounded-xl border border-border p-4 sm:flex sm:flex-wrap sm:gap-5 lg:gap-6',
)
