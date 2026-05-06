import { CardAboutMe } from '@/components/CardAboutMe/CardAboutMe'
import CardTechnology from '@/components/CardTechnology'
import { Container } from '@/components/Container/Container'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <Container>
      <Header />
      {/* <CardExperiences /> */}
      <CardAboutMe />
      <CardTechnology />
    </Container>
  )
}
