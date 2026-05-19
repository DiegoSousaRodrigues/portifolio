import { PrimaryButton } from '@/styles/button.styles'
import { contactLinks, externalLinkProps } from '@/data/contact-links'
import { FiUser } from 'react-icons/fi'
import { MdArrowForward } from 'react-icons/md'
import { CodeAboutMe } from '../CodeAboutMe'
import {
  AccentPoint,
  AccentText,
  Actions,
  Content,
  Description,
  EditorWrapper,
  Eyebrow,
  FollowBlock,
  FollowLabel,
  GithubIcon,
  Glow,
  HeadingGroup,
  Intro,
  LinkedinIcon,
  MailIcon,
  SecondaryButton,
  SocialActions,
  SocialButton,
  Title,
  Wrapper,
} from './CardPrincipal.styles'

export function CardPrincipal() {
  return (
    <Wrapper id="inicio">
      <Glow />

      <Content>
        <Intro>
          <HeadingGroup>
            <Eyebrow>FRONT-END ENGINEER SÊNIOR</Eyebrow>

            <Title>
              Construindo{' '}
              <AccentText>
                experiências
              </AccentText>{' '}
              digitais de alto impacto
              <AccentPoint>.</AccentPoint>
            </Title>
          </HeadingGroup>

          <Description>
            Especialista em React, Next.js e arquitetura frontend. Transformo
            ideias complexas em interfaces simples, performáticas e escaláveis.
          </Description>

          <Actions>
            <PrimaryButton href="#projetos">
              <span>Ver projetos</span>
              <MdArrowForward />
            </PrimaryButton>

            <SecondaryButton href="#sobre">
              <span>Sobre mim</span>
              <FiUser />
            </SecondaryButton>
          </Actions>
        </Intro>

        <FollowBlock>
          <FollowLabel>ME SIGA POR AÍ</FollowLabel>
          <SocialActions>
            <SocialButton
              href={contactLinks.github}
              aria-label="Acessar GitHub de Diego Sousa"
              {...externalLinkProps}
            >
              <GithubIcon size={28} />
            </SocialButton>
            <SocialButton
              href={contactLinks.linkedin}
              aria-label="Acessar LinkedIn de Diego Sousa"
              {...externalLinkProps}
            >
              <LinkedinIcon size={28} />
            </SocialButton>
            <SocialButton
              href={contactLinks.email}
              aria-label="Enviar e-mail para Diego Sousa"
            >
              <MailIcon size={29} />
            </SocialButton>
          </SocialActions>
        </FollowBlock>
      </Content>

      <EditorWrapper>
        <CodeAboutMe />
      </EditorWrapper>
    </Wrapper>
  )
}
