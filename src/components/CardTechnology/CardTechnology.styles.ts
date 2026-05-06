import Image from 'next/image'
import { w } from 'windstitch'

export const Wrapper = w.div('flex flex-col gap-2 bg-gray-700 p-6 rounded-2xl')

export const Title = w.span('text-2xl font-bold')

export const Description = w.span('text-sm font-normal')

export const TechnologyList = w.div('flex flex-wrap gap-4')

export const TechnologyItem = w.div('flex flex-col gap-1 items-center')

export const IconWrapper = w.div('p-4 bg-gray-800 rounded-xl')

export const TechnologyImage = w(Image, {
  className: 'h-8 w-8',
})
