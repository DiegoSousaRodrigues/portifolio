import Image from 'next/image'
import { w } from 'windstitch'

export const Wrapper = w.section('flex flex-col gap-6')

export const ExperiencesList = w.div(
  'grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,520px)]',
)

export const ExperienceCard = w.article(
  'relative w-full overflow-hidden rounded-3xl bg-experience-card p-px shadow-experience-card',
)

export const ExperienceCardGlow = w.div(
  'pointer-events-none absolute inset-0 bg-experience-glow',
)

export const ExperienceCardContent = w.div(
  'relative h-full rounded-3xl bg-surface-deep/95 p-4 backdrop-blur-xl sm:p-6',
)

export const ExperienceImageWrapper = w.div(
  'mb-6 overflow-hidden rounded-2xl border border-border-subtle',
)

export const ExperienceImage = w(Image, {
  className: 'h-auto w-full object-cover',
})

export const ExperiencePreviewFrame = w.iframe(
  'aspect-[4/3] h-auto min-h-[240px] w-full rounded-xl border border-border-subtle bg-primary-foreground sm:min-h-[320px] lg:min-h-[360px]',
)

export const ExperienceContent = w.div('space-y-4')

export const ExperienceTitle = w.h3(
  'text-2xl font-semibold text-text-primary sm:text-3xl',
)

export const ExperienceDescription = w.p('mt-3 text-text-subtle')

export const ExperienceTags = w.div('flex flex-wrap gap-3')

export const ExperienceTag = w.span(
  'rounded-xl border border-border-subtle bg-surface-soft px-4 py-2 text-sm text-text-project backdrop-blur-md',
)

export const ExperienceFooter = w.div(
  'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between',
)

const experienceActionClasses =
  'flex items-center gap-2 text-text-project transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'

export const ExperienceAction = w.a(experienceActionClasses)
