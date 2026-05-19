import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { w } from 'windstitch'

export const Wrapper = w.section(
  'relative isolate grid min-h-0 min-w-0 items-center gap-8 overflow-hidden py-4 md:min-h-[560px] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:gap-8',
)

export const Glow = w.div(
  'absolute right-[-60%] top-[-18%] -z-10 h-[320px] w-[440px] rounded-full bg-hero-glow sm:right-[-28%] md:h-[420px] md:w-[620px] lg:right-[-4%]',
)

export const Content = w.div(
  'flex w-full min-w-0 max-w-[620px] flex-col gap-7 md:gap-8',
)

export const Intro = w.div('flex flex-col gap-5 md:gap-6')

export const HeadingGroup = w.div('flex flex-col gap-4 md:gap-5')

export const Eyebrow = w.span('text-xs font-bold text-primary')

export const Title = w.h1(
  'break-words text-[34px] font-bold leading-[1.08] text-text-primary sm:text-[44px] lg:text-[52px] xl:text-[56px]',
)

export const AccentText = w.span(
  'bg-heading-accent bg-clip-text text-transparent',
)

export const AccentPoint = w.span('text-primary')

export const Description = w.p(
  'max-w-[560px] break-words text-base leading-7 text-text-secondary sm:text-[18px] sm:leading-8',
)

export const Actions = w.div('grid gap-3 sm:flex sm:flex-wrap sm:gap-4')

export const SecondaryButton = w.a(
  'flex items-center justify-center gap-3 rounded-[14px] border border-border-strong bg-background/40 px-8 py-3 text-base text-text-primary transition-[border-color,background-color] duration-200 hover:border-border-strong hover:bg-background-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
)

export const FollowBlock = w.div('flex flex-col gap-5')

export const FollowLabel = w.span('text-xs font-medium text-primary')

export const SocialActions = w.div('flex gap-6 sm:gap-8')

export const SocialButton = w.a(
  'cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
)

export const GithubIcon = w(FaGithub, {
  className: 'fill-icon-muted',
})

export const LinkedinIcon = w(FaLinkedin, {
  className: 'fill-icon-muted',
})

export const MailIcon = w(MdOutlineMailOutline, {
  className: 'fill-icon-muted',
})

export const EditorWrapper = w.div(
  'flex w-full min-w-0 justify-center lg:justify-end',
)
