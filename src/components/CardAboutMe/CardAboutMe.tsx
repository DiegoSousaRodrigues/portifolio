import { TitleScreen } from '@/styles/commum'
import { MdCheck } from 'react-icons/md'
import { AboutItemProps } from './CardAboutMe.types'
import Image from 'next/image'

export function CardAboutMe() {
  return (
    <div className="flex bg-gray-700 p-6 rounded-2xl">
      <div>
        <h2 className={TitleScreen({})}>Sobre mim</h2>
        <p className="text-sm">
          Sou um Frontend Engineer Sênior apaixonado por criar soluções digitais
          que combinam tecnologia, design e estratégia.
        </p>
        <p className="text-sm">
          Ao longo da minha carreira, trabalhei com equipes multidisciplinares
          para entregar produtos que não apenas atendem às necessidades dos
          usuários, mas também impulsionam os resultados do negócio.
        </p>
        <ul>
          <ul>
            <AboutItem>Foco em performance e boas práticas</AboutItem>
            <AboutItem>
              Experiência com times ágeis e cultura de produto
            </AboutItem>
            <AboutItem>Comunicação clara e colaboração constante</AboutItem>
            <AboutItem>
              Apaixonado por aprender e compartilhar conhecimento
            </AboutItem>
          </ul>
        </ul>
      </div>
      <div>
        <Image
          src="/aboutMe.png"
          alt="imagem-sobre-ilustrativa"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

function AboutItem({ children }: AboutItemProps) {
  return (
    <li className="flex items-center gap-2 text-sm">
      <MdCheck size={22} className="fill-blue-400" />
      {children}
    </li>
  )
}
