import { TitleScreen, WrapperScreen } from '@/styles/commum'
import { MdCheck } from 'react-icons/md'
import { AboutItemProps } from './CardAboutMe.types'
import Image from 'next/image'

export function CardAboutMe() {
  return (
    <div className={WrapperScreen({})}>
      <h2 className={TitleScreen({})}>Sobre mim</h2>
      <p className="text-sm">
        Sou um Frontend Engineer Sênior apaixonado por transformar ideias em
        experiências digitais modernas, performáticas e intuitivas. Tenho
        experiência no desenvolvimento de aplicações escaláveis utilizando
        tecnologias como React, Next.js, TypeScript e Tailwind CSS, sempre com
        foco em qualidade de código, arquitetura e experiência do usuário.
      </p>
      <p className="text-sm">
        Ao longo da minha trajetória, participei da construção de produtos
        voltados para diferentes áreas de negócio, colaborando diretamente com
        times multidisciplinares para entregar interfaces eficientes, acessíveis
        e alinhadas aos objetivos estratégicos da empresa.
      </p>
      <p className="text-sm">
        Tenho grande interesse por engenharia de software, performance web,
        design de interfaces e boas práticas de desenvolvimento front-end. Gosto
        de ir além da implementação visual, buscando entender profundamente como
        as aplicações funcionam internamente para construir soluções mais
        sólidas, escaláveis e bem estruturadas.
      </p>
      <p className="text-sm">
        Além do desenvolvimento, valorizo muito colaboração, comunicação clara e
        aprendizado contínuo. Estou sempre estudando novas tecnologias, padrões
        de arquitetura e formas de elevar a qualidade dos produtos que construo.
      </p>
      <p className="text-sm">Alguns pontos que fazem parte do meu dia a dia:</p>
      <ul>
        <AboutItem>
          Desenvolvimento de aplicações modernas com React e Next.js
        </AboutItem>
        <AboutItem>Criação de interfaces responsivas e acessíveis</AboutItem>
        <AboutItem>Arquitetura e organização escalável de front-end</AboutItem>
        <AboutItem>Performance, SEO e boas práticas</AboutItem>
        <AboutItem>Integração com APIs e ecossistemas modernos</AboutItem>
        <AboutItem>Experiência com times ágeis e cultura de produto</AboutItem>
        <AboutItem>Forte interesse em UI/UX e experiência do usuário</AboutItem>
      </ul>
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
