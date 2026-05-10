'use client'

type CardHeaderProps = {
  eyebrow: string
  title: string
  actionLabel: string
  actionButton?: () => void
}

export function CardHeader({
  eyebrow,
  title,
  actionLabel,
  actionButton,
}: CardHeaderProps) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3">
        <h2 className="text-primary font-bold text-sm">{eyebrow}</h2>
        <span className="text-3xl font-bold">{title}</span>
      </div>
      <button
        type="button"
        onClick={actionButton}
        className="flex items-center gap-4 border border-primary rounded-lg py-3 px-4 h-fit font-bold cursor-pointer"
      >
        {actionLabel} <div className="h-fit p-1 bg-primary rounded-full"></div>
      </button>
    </div>
  )
}
