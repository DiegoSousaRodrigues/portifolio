import {
  Description,
  IconWrapper,
  TechnologyImage,
  TechnologyItem,
  TechnologyList,
  Title,
  Wrapper,
} from './CardTechnology.styles'
import { Technology } from './CardTechnology.types'

export function CardTechnology() {
  const technologies = [
    {
      title: 'HTML5',
      imagePath: '/svg/html5.svg',
    },
    {
      title: 'CSS3',
      imagePath: '/svg/css3.svg',
    },
    {
      title: 'JavaScript',
      imagePath: '/svg/javascript.svg',
    },
    {
      title: 'TypeScript',
      imagePath: '/svg/typescript.svg',
    },
    {
      title: 'React',
      imagePath: '/svg/react.svg',
    },
    {
      title: 'Next.js',
      imagePath: '/svg/nextjs.svg',
    },
    {
      title: 'Node.js',
      imagePath: '/svg/nodejs.svg',
    },
    {
      title: 'Tailwind',
      imagePath: '/svg/tailwindcss.svg',
    },
    {
      title: 'PostgreSQL',
      imagePath: '/svg/postgresql.svg',
    },
    {
      title: 'Git',
      imagePath: '/svg/git.svg',
    },
    {
      title: 'Figma',
      imagePath: '/svg/figma.svg',
    },
    {
      title: 'Flutter',
      imagePath: '/svg/flutter.svg',
    },
    {
      title: 'Dart',
      imagePath: '/svg/dart.svg',
    },
  ] satisfies Technology[]

  return (
    <Wrapper>
      <Title>Tecnologias</Title>
      <Description>
        Ferramentas e tecnologias que utilizo para transformar ideias em
        soluções
      </Description>
      <TechnologyList>
        {technologies.map(({ imagePath, title }) => (
          <TechnologyItem key={title}>
            <IconWrapper>
              <TechnologyImage
                src={imagePath}
                alt={`${title} logo`}
                width={32}
                height={32}
              />
            </IconWrapper>
            <span className="text-xs">{title}</span>
          </TechnologyItem>
        ))}
      </TechnologyList>
    </Wrapper>
  )
}
