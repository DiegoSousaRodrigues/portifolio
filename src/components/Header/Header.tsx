import { BlueCircle } from '../BlueCircle'
import { contactLinks, externalLinkProps } from '@/data/contact-links'
import Image from 'next/image'
import {
  ArrowIcon,
  Brand,
  BrandName,
  ConversationButton,
  Wrapper,
} from './Header.styles'

export function Header() {
  return (
    <Wrapper>
      <Brand>
        <div>
          <Image
            alt="Logo de Diego Sousa"
            src="/images/logo2.png"
            width={40}
            height={40}
          />
        </div>
        <BrandName>DIEGO SOUSA</BrandName>
        <BlueCircle />
      </Brand>
      <ConversationButton href={contactLinks.whatsapp} {...externalLinkProps}>
        Vamos conversar
        <ArrowIcon size={20} />
      </ConversationButton>
    </Wrapper>
  )
}
