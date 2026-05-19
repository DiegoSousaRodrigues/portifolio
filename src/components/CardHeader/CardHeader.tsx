import { BlueCircle } from '../BlueCircle'
import {
  ActionButton,
  Eyebrow,
  Title,
  TitleBlock,
  Wrapper,
} from './CardHeader.styles'

type CardHeaderProps = {
  eyebrow: string
  title: string
  actionLabel?: string
  actionHref?: string
}

export function CardHeader({
  eyebrow,
  title,
  actionLabel,
  actionHref,
}: CardHeaderProps) {
  return (
    <Wrapper>
      <TitleBlock>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
      </TitleBlock>
      {actionLabel && actionHref ? (
        <ActionButton href={actionHref}>
          {actionLabel} <BlueCircle />
        </ActionButton>
      ) : null}
    </Wrapper>
  )
}
