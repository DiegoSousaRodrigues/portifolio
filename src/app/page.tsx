import { CardAboutMe } from '@/components/CardAboutMe/CardAboutMe'
import { CardContact } from '@/components/CardContact'
import CardExperiences from '@/components/CardExperiences'
import { CardPrincipal } from '@/components/CardPrincipal'
import CardTechnology from '@/components/CardTechnology'
import { Container } from '@/components/Container/Container'
import Header from '@/components/Header/Header'
import { SectionDivider } from '@/components/SectionDivider'

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
      <div className="flex flex-col gap-10">
        <CardExperiences />
        <CardContact />
      </div>
    </Container>
  )
}
