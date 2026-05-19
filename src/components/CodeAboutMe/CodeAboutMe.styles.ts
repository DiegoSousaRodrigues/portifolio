import { w } from 'windstitch'

export const Wrapper = w.div(
  'relative min-h-[360px] w-full min-w-0 max-w-[720px] overflow-hidden rounded-2xl pb-4 pl-3 pt-4 sm:min-h-[460px] sm:rounded-3xl sm:pb-6 sm:pl-[26px] sm:pt-7 lg:min-h-[560px]',
)

export const TopGlow = w.div(
  'absolute right-[-140px] top-[-90px] h-[220px] w-[320px] bg-editor-top-glow blur-[4px] sm:right-[-40px] sm:top-[-70px] sm:h-[260px] sm:w-[430px]',
)

export const SideGlow = w.div(
  'absolute left-[-130px] top-[220px] h-[90px] w-[170px] rotate-[-18deg] rounded-full border-2 border-editor-side-glow shadow-editor-side-glow blur-[0.4px] sm:left-[-92px] sm:top-[260px] sm:h-[110px] sm:w-[210px]',
)

export const BottomGlow = w.div(
  'absolute bottom-1 left-0 h-[60px] w-[320px] rounded-full bg-editor-bottom-glow blur-[34px] sm:left-10 sm:h-[72px] sm:w-[560px]',
)

export const DotsPattern = w.div(
  'absolute right-[-80px] top-1 h-[280px] w-[180px] bg-editor-dots bg-[length:16px_16px] opacity-[0.18] sm:right-[-6px] sm:h-[360px] sm:w-[230px] sm:opacity-[0.24]',
)

export const EditorCard = w.div(
  'relative z-20 min-h-[330px] w-full min-w-0 overflow-hidden rounded-[18px] border border-border-editor bg-editor-surface/84 shadow-editor-card backdrop-blur-[18px] sm:min-h-[430px] sm:rounded-[22px] lg:min-h-[500px]',
)

export const EditorHeader = w.div(
  'relative flex h-[52px] items-center justify-center border-b border-border-divider sm:h-[68px]',
)

export const WindowControls = w.div(
  'absolute left-4 flex gap-2 sm:left-[34px] sm:gap-[10px]',
)

export const WindowDot = w.span('h-[10px] w-[10px] rounded-full sm:h-[14px] sm:w-[14px]', {
  variants: {
    color: {
      red: 'bg-editor-dot-red shadow-editor-dot-red',
      yellow: 'bg-editor-dot-yellow shadow-editor-dot-yellow',
      green: 'bg-editor-dot-green shadow-editor-dot-green',
    },
  },
})

export const FileName = w.span(
  'text-sm font-semibold tracking-[0.2px] text-text-editor sm:text-base',
)

export const StatusDot = w.span(
  'ml-3 h-2 w-2 rounded-full bg-primary shadow-editor-status sm:ml-6 sm:h-[10px] sm:w-[10px]',
)

export const CodeBlock = w.pre(
  'm-0 whitespace-pre-wrap break-words px-4 pb-6 pt-5 font-mono-code text-[12px] leading-[1.7] text-text-editor sm:px-[42px] sm:pb-[38px] sm:pt-[34px] sm:text-[15px] lg:text-[17px]',
)

export const CodeLine = w.div('', {
  variants: {
    indent: {
      0: 'pl-0',
      1: 'pl-3 sm:pl-7',
      2: 'pl-6 sm:pl-14',
      3: 'pl-9 sm:pl-[84px]',
      4: 'pl-12 sm:pl-28',
    },
  },
  defaultVariants: {
    indent: 0,
  },
})

export const Keyword = w.span('font-bold text-editor-keyword')

export const Variable = w.span('font-bold text-editor-variable')

export const Tag = w.span('font-semibold text-editor-tag')

export const Attr = w.span('text-editor-attribute')

export const StringToken = w.span('font-semibold text-editor-string')

export const Comment = w.span('text-text-muted')

export const Text = w.span('text-text-editor')
