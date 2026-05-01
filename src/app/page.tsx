import CardExperiences from '@/components/CardExperiences'
import CardTechnology from '@/components/CardTechnology'
import { Container } from '@/components/Container/Container'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <Container>
      <Header />
      {/* <CardExperiences /> */}
      <CardTechnology />
    </Container>
  )
}
