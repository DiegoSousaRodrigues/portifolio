import Image from 'next/image'
import { w } from 'windstitch'

export const Wrapper = w.div('flex flex-col gap-3')

export const Title = w.span('text-3xl font-bold')

export const TechnologyList = w.div('flex flex-wrap gap-4')

export const TechnologyImage = w(Image, {
  className: 'h-8 w-8',
})
