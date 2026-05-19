import { CardAboutMe } from '@/components/CardAboutMe'
import { CardContact } from '@/components/CardContact'
import { CardExperiences } from '@/components/CardExperiences'
import { CardPrincipal } from '@/components/CardPrincipal'
import { CardTechnology } from '@/components/CardTechnology'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { SectionDivider } from '@/components/SectionDivider'
import { BottomSections } from './page.styles'

export default function Home() {
  return (
    <Container>
      <Header />
      <CardPrincipal />
      <SectionDivider />
      <CardAboutMe />
      <SectionDivider />
      <CardTechnology />
      <SectionDivider />
      <BottomSections>
        <CardExperiences />
        <CardContact />
      </BottomSections>
    </Container>
  )
}
