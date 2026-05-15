import { CardAboutMe } from '@/components/CardAboutMe/CardAboutMe'
import CardExperiences from '@/components/CardExperiences'
import { CardFooter } from '@/components/CardFooter'
import { CardPrincipal } from '@/components/CardPrincipal'
import CardTechnology from '@/components/CardTechnology'
import { Container } from '@/components/Container/Container'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <Container>
      <Header />
      <CardPrincipal />
      <div className="w-full h-[1px] bg-accent-soft"></div>
      <CardAboutMe />
      <div className="w-full h-[1px] bg-accent-soft"></div>
      <CardTechnology />
      <div className="w-full h-[1px] bg-accent-soft"></div>
      <div className="flex flex-col gap-10">
        <CardExperiences />
        <CardFooter />
      </div>
    </Container>
  )
}
