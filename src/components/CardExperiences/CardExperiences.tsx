import { FiExternalLink } from 'react-icons/fi'
import CardHeader from '../CardHeader'
import {
  ExperienceAction,
  ExperienceCard,
  ExperienceCardContent,
  ExperienceCardGlow,
  ExperienceContent,
  ExperienceDescription,
  ExperienceFooter,
  ExperienceImage,
  ExperienceImageWrapper,
  ExperienceActionButton,
  ExperiencePreviewFrame,
  ExperiencesList,
  ExperienceTag,
  ExperienceTags,
  ExperienceTitle,
  Wrapper,
} from './CardExperiences.styles'
import { Experience } from './CardExperiences.types'
import Image from 'next/image'

const experiences: Experience[] = [
  {
    title: 'Auth Next.js',
    description:
      'Aplicação de autenticação com página inicial, login e área logada, exibindo o estado da sessão do usuário.',
    previewUrl: 'https://auth-alpha-dusky.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Autenticação'],
    projectLabel: 'Ver projeto',
    projectUrl: 'https://auth-alpha-dusky.vercel.app/',
    codeLabel: 'Código',
  },
]

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
          <ExperienceCard key={experience.title}>
            <ExperienceCardGlow />

            <ExperienceCardContent>
              {experience.previewUrl ? (
                <ExperienceImageWrapper>
                  <ExperiencePreviewFrame
                    src={experience.previewUrl}
                    title={`Preview do projeto ${experience.title}`}
                    loading="lazy"
                  />
                </ExperienceImageWrapper>
              ) : (
                experience.imagePath &&
                experience.imageAlt && (
                  <ExperienceImageWrapper>
                    <ExperienceImage
                      src={experience.imagePath}
                      alt={experience.imageAlt}
                      width={640}
                      height={360}
                    />
                  </ExperienceImageWrapper>
                )
              )}

              <ExperienceContent>
                <div>
                  <ExperienceTitle>{experience.title}</ExperienceTitle>

                  <ExperienceDescription>
                    {experience.description}
                  </ExperienceDescription>
                </div>

                <ExperienceTags>
                  {experience.tags.map((tag) => (
                    <ExperienceTag key={tag}>{tag}</ExperienceTag>
                  ))}
                </ExperienceTags>

                <ExperienceFooter>
                  {experience.projectUrl ? (
                    <ExperienceAction
                      href={experience.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                      {experience.projectLabel}
                    </ExperienceAction>
                  ) : (
                    <ExperienceActionButton type="button">
                      <FiExternalLink />
                      {experience.projectLabel}
                    </ExperienceActionButton>
                  )}

                  {experience.codeUrl ? (
                    <ExperienceAction
                      href={experience.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/svg/github-white.svg"
                        alt="github icon"
                        width={24}
                        height={24}
                      />
                      {experience.codeLabel}
                    </ExperienceAction>
                  ) : (
                    <ExperienceActionButton type="button">
                      <Image
                        src="/svg/github-white.svg"
                        alt="github icon"
                        width={24}
                        height={24}
                      />
                      {experience.codeLabel}
                    </ExperienceActionButton>
                  )}
                </ExperienceFooter>
              </ExperienceContent>
            </ExperienceCardContent>
          </ExperienceCard>
        ))}
      </ExperiencesList>
    </Wrapper>
  )
}
