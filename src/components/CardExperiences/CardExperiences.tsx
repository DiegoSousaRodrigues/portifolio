import type { ReactNode } from 'react'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import BlueCircle from '../BlueCircle'
import CardHeader from '../CardHeader'
import {
  ExperienceAction,
  ExperienceCard,
  ExperienceCardContent,
  ExperienceCardGlow,
  ExperienceContent,
  ExperienceDescription,
  ExperienceFooter,
  ExperienceImageWrapper,
  ExperiencePreviewFrame,
  ExperiencesList,
  ExperienceTag,
  ExperienceTags,
  ExperienceTitle,
  Wrapper,
} from './CardExperiences.styles'
import type { Experience } from './CardExperiences.types'

const experiences = [
  {
    title: 'Auth Next.js',
    description:
      'Aplicação de autenticação com página inicial, login e área logada, exibindo o estado da sessão do usuário.',
    previewUrl: 'https://auth-alpha-dusky.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Autenticação'],
    projectLabel: 'Ver projetos',
    projectUrl: 'https://auth-alpha-dusky.vercel.app/',
    codeLabel: 'Código',
    codeUrl: 'https://github.com/DiegoSousaRodrigues/auth',
  },
] satisfies Experience[]

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer',
} as const

type ExperienceCardItemProps = {
  experience: Experience
}

type ExperiencePreviewProps = Pick<Experience, 'previewUrl' | 'title'>

type ExperienceTagListProps = Pick<Experience, 'tags'>

type ExperienceActionsProps = Pick<
  Experience,
  'codeLabel' | 'codeUrl' | 'projectLabel' | 'projectUrl'
>

type ExperienceActionLinkProps = {
  children: ReactNode
  href: string
  label: string
}

export function CardExperiences() {
  return (
    <Wrapper>
      <CardHeader
        eyebrow="Projetos"
        title="Projetos em destaque"
        actionLabel="Ver todos os projetos"
      />

      <ExperiencesList>
        {experiences.map((experience) => (
          <ExperienceCardItem key={experience.title} experience={experience} />
        ))}
      </ExperiencesList>
    </Wrapper>
  )
}

function ExperienceCardItem({ experience }: ExperienceCardItemProps) {
  const {
    codeLabel,
    codeUrl,
    description,
    previewUrl,
    projectLabel,
    projectUrl,
    tags,
    title,
  } = experience

  return (
    <ExperienceCard>
      <ExperienceCardGlow />

      <ExperienceCardContent>
        <ExperiencePreview previewUrl={previewUrl} title={title} />

        <ExperienceContent>
          <div>
            <ExperienceTitle>{title}</ExperienceTitle>

            <ExperienceDescription>{description}</ExperienceDescription>
          </div>

          <ExperienceTagList tags={tags} />

          <ExperienceActions
            codeLabel={codeLabel}
            codeUrl={codeUrl}
            projectLabel={projectLabel}
            projectUrl={projectUrl}
          />
        </ExperienceContent>
      </ExperienceCardContent>
    </ExperienceCard>
  )
}

function ExperiencePreview({ previewUrl, title }: ExperiencePreviewProps) {
  return (
    <ExperienceImageWrapper>
      <ExperiencePreviewFrame
        src={previewUrl}
        title={`Preview do projeto ${title}`}
        loading="lazy"
      />
    </ExperienceImageWrapper>
  )
}

function ExperienceTagList({ tags }: ExperienceTagListProps) {
  return (
    <ExperienceTags>
      {tags.map((tag) => (
        <ExperienceTag key={tag}>{tag}</ExperienceTag>
      ))}
    </ExperienceTags>
  )
}

function ExperienceActions({
  codeLabel,
  codeUrl,
  projectLabel,
  projectUrl,
}: ExperienceActionsProps) {
  return (
    <ExperienceFooter>
      <ExperienceActionLink href={projectUrl} label={projectLabel}>
        <FiExternalLink />
      </ExperienceActionLink>

      <ExperienceActionLink href={codeUrl} label={codeLabel}>
        <Image
          src="/svg/github-white.svg"
          alt="github icon"
          width={24}
          height={24}
        />
      </ExperienceActionLink>
    </ExperienceFooter>
  )
}

function ExperienceActionLink({
  children,
  href,
  label,
}: ExperienceActionLinkProps) {
  return (
    <ExperienceAction href={href} {...externalLinkProps}>
      {children}
      {label} <BlueCircle />
    </ExperienceAction>
  )
}
