import type { ReactNode } from 'react'
import {
  CardsList,
  CodeIcon,
  Copy,
  Eyebrow,
  FlashIcon,
  HeadingGroup,
  InfoCard,
  InfoCardContent,
  InfoDescription,
  InfoIcon,
  InfoTitle,
  RocketIcon,
  Title,
  Wrapper,
} from './CardAboutMe.styles'

export type GradientInfoCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export function GradientInfoCard({
  icon,
  title,
  description,
}: GradientInfoCardProps) {
  return (
    <InfoCard>
      <InfoCardContent>
        <InfoIcon>{icon}</InfoIcon>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>{description}</InfoDescription>
      </InfoCardContent>
    </InfoCard>
  )
}

export function CardAboutMe() {
  return (
    <Wrapper id="sobre">
      <Copy>
        <HeadingGroup>
          <Eyebrow>SOBRE MIM</Eyebrow>
          <Title>Mais sobre mim</Title>
        </HeadingGroup>
        <p>
          Apaixonado por tecnologia e produto. Atuo há mais de 5 anos criando
          aplicações web modernas, escaláveis e com foco em experiência do
          usuário e performance
        </p>
      </Copy>
      <CardsList>
        <GradientInfoCard
          icon={<CodeIcon />}
          title="+5 anos"
          description="de experiência"
        />
        <GradientInfoCard
          icon={<RocketIcon />}
          title="10+"
          description="projetos entregues"
        />
        <GradientInfoCard
          icon={<FlashIcon />}
          title="Foco em"
          description="performance e UX "
        />
      </CardsList>
    </Wrapper>
  )
}
