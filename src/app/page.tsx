import CardExperiences from '@/components/CardExperiences'
import { CardFooter } from '@/components/CardFooter'
import CardTechnology from '@/components/CardTechnology'
import { Container } from '@/components/Container/Container'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <Container>
      <Header />
      <CardTechnology />
      <div className="w-full h-[1px] bg-accent-soft"></div>
      <CardExperiences />
      <div className="w-full h-[1px] bg-accent-soft"></div>
      <CardFooter />
      {/* <CardAboutMe /> */}
    </Container>
  )
}
