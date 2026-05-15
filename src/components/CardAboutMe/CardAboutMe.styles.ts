import { w } from 'windstitch'

export const AboutSection = w.section(
  'relative isolate flex flex-col gap-8 overflow-hidden rounded-3xl border border-border bg-[radial-gradient(ellipse_at_88%_16%,rgba(59,130,246,0.20),transparent_34%),linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(7,16,31,0.92)_54%,rgba(11,18,32,0.94)_100%)] px-8 py-9 shadow-[0_0_40px_rgba(59,130,246,0.08)] md:flex-row md:items-center md:justify-between',
)

export const AboutCopy = w.div(
  'relative z-10 flex w-full max-w-[560px] flex-col gap-4',
)

export const AboutCardsList = w.div(
  'relative z-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 md:w-auto md:min-w-[504px]',
)

export const InfoCard = w.div(
  'relative aspect-square min-h-[150px] overflow-hidden rounded-[18px] bg-[linear-gradient(145deg,rgba(59,130,246,0.20),rgba(255,255,255,0.05)_44%,rgba(56,189,248,0.10))] p-[1px] shadow-[0_0_24px_rgba(59,130,246,0.08)]',
)

export const InfoCardContent = w.div(
  'relative flex h-full flex-col items-center justify-center rounded-[17px] border border-white/[0.04] bg-[#07101F]/95 px-4 text-center backdrop-blur-xl',
)

export const InfoIcon = w.div(
  'mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(30,64,175,0.34),rgba(2,6,23,0.92))] text-[26px] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_20px_rgba(37,99,235,0.20)]',
)
