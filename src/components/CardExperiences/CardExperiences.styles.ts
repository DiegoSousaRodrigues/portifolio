import Image from 'next/image'
import { w } from 'windstitch'

export const Wrapper = w.div('flex flex-col gap-6')

export const ExperiencesList = w.div('flex flex-col gap-6')

export const ExperienceCard = w.article(
  'relative w-full overflow-hidden rounded-3xl p-[1px] bg-gradient-to-b from-white/10 via-blue-500/10 to-white/5 shadow-[0_0_40px_rgba(59,130,246,0.08)] md:w-1/3',
)

export const ExperienceCardGlow = w.div(
  'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_55%)]',
)

export const ExperienceCardContent = w.div(
  'relative h-full rounded-3xl bg-[#07101F]/95 p-6 backdrop-blur-xl',
)

export const ExperienceImageWrapper = w.div(
  'mb-6 overflow-hidden rounded-2xl border border-white/5',
)

export const ExperienceImage = w(Image, {
  className: 'h-auto w-full object-cover',
})

export const ExperiencePreviewFrame = w.iframe(
  'h-[400px] w-full rounded-xl border border-white/5 bg-white ',
)

export const ExperienceContent = w.div('space-y-4')

export const ExperienceTitle = w.h2('text-3xl font-semibold text-white')

export const ExperienceDescription = w.p('mt-3 text-zinc-400')

export const ExperienceTags = w.div('flex flex-wrap gap-3')

export const ExperienceTag = w.span(
  'rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur-md',
)

export const ExperienceFooter = w.div('flex items-center justify-between')

const experienceActionClasses =
  'flex items-center gap-2 text-zinc-200 transition-colors hover:text-blue-400'

export const ExperienceAction = w.a(experienceActionClasses)
