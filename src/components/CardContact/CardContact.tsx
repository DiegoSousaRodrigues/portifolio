import { FiArrowUpRight } from 'react-icons/fi'
import { contactLinks, externalLinkProps } from '@/data/contact-links'
import { PrimaryButton } from '@/styles/button.styles'
import { BlueCircle } from '../BlueCircle'
import {
  AccentText,
  Actions,
  Content,
  Copy,
  EmailIcon,
  Eyebrow,
  FlashIcon,
  FooterNote,
  LinkedinIcon,
  PrimaryButtonLabel,
  SecondaryActions,
  SecondaryButton,
  Title,
  Wrapper,
} from './CardContact.styles'
import { MdWhatsapp } from 'react-icons/md'

export function CardContact() {
  return (
    <Wrapper id="contato">
      <Eyebrow>
        CONTATO <BlueCircle />
      </Eyebrow>
      <Content>
        <Copy>
          <Title>
            Vamos construir{' '}
            <AccentText>
              algo incrível
            </AccentText>{' '}
            juntos?
          </Title>
          <div>
            Estou sempre aberto a boas conversas sobre tecnologia, produtos
            digitais e experiências web. Se quiser trocar uma ideia ou entrar em
            contato, fale comigo por um dos canais ao lado.
          </div>
        </Copy>
        <Actions>
          <PrimaryButton
            href={contactLinks.whatsapp}
            fullWidth
            {...externalLinkProps}
          >
            <MdWhatsapp size={24} />
            <PrimaryButtonLabel>Entrar em contato</PrimaryButtonLabel>
            <FiArrowUpRight size={16} strokeWidth={3} />
          </PrimaryButton>
          <SecondaryActions>
            <SecondaryButton href={contactLinks.email}>
              <EmailIcon size={24} />
              <span>Enviar e-mail</span>
            </SecondaryButton>
            <SecondaryButton href={contactLinks.linkedin} {...externalLinkProps}>
              <LinkedinIcon size={24} />
              <span>LinkedIn</span>
            </SecondaryButton>
          </SecondaryActions>
          <FooterNote>
            <FlashIcon />
            Resposta rápida para novos projetos e parcerias.
          </FooterNote>
        </Actions>
      </Content>
    </Wrapper>
  )
}
