import {
  TechnologyImage,
  TechnologyList,
  Title,
  Wrapper,
} from './CardTechnology.styles'
import { Technology } from './CardTechnology.types'

const technologies = [
  {
    name: 'HTML5',
    group: 'front',
    imagePath: '/svg/html5.svg',
  },
  {
    name: 'CSS3',
    group: 'front',
    imagePath: '/svg/css3.svg',
  },
  {
    name: 'JavaScript',
    group: 'front',
    imagePath: '/svg/javascript.svg',
  },
  {
    name: 'TypeScript',
    group: 'front',
    imagePath: '/svg/typescript.svg',
  },
  {
    name: 'React',
    group: 'front',
    imagePath: '/svg/react.svg',
  },
  {
    name: 'Next.js',
    group: 'front',
    imagePath: '/svg/nextjs.svg',
  },
  {
    name: 'Tailwind CSS',
    group: 'front',
    imagePath: '/svg/tailwindcss.svg',
  },
  {
    name: 'Flutter',
    group: 'front',
    imagePath: '/svg/flutter.svg',
  },
  {
    name: 'Dart',
    group: 'front',
    imagePath: '/svg/dart.svg',
  },
  {
    name: 'Node.js',
    group: 'back',
    imagePath: '/svg/nodejs.svg',
  },
  {
    name: 'Go',
    group: 'back',
    imagePath: '/svg/go.svg',
  },
  {
    name: 'Grails',
    group: 'back',
    imagePath: '/svg/grails.svg',
  },
  {
    name: 'PostgreSQL',
    group: 'banco',
    imagePath: '/svg/postgresql.svg',
  },
  {
    name: 'MySQL',
    group: 'banco',
    imagePath: '/svg/mysql.svg',
  },
  {
    name: 'Redis',
    group: 'banco',
    imagePath: '/svg/redis.svg',
  },
  {
    name: 'Git',
    group: 'ferramentas',
    imagePath: '/svg/git.svg',
  },
  {
    name: 'GitHub',
    group: 'ferramentas',
    imagePath: '/svg/github.svg',
  },
  {
    name: 'Figma',
    group: 'ferramentas',
    imagePath: '/svg/figma.svg',
  },
  {
    name: 'Visual Studio Code',
    group: 'ferramentas',
    imagePath: '/svg/vscode.svg',
  },
] satisfies Technology[]

const technologyGroupsOrder = [
  'front',
  'back',
  'banco',
  'ferramentas',
  'servicos',
] satisfies Technology['group'][]

const technologyGroupLabels = {
  front: 'front',
  back: 'back',
  banco: 'banco',
  ferramentas: 'ferramentas',
  servicos: 'serviços',
} satisfies Record<Technology['group'], string>

type TechnologiesByGroup = Record<Technology['group'], Technology[]>

const technologiesByGroup = technologies.reduce<TechnologiesByGroup>(
  (groups, technology) => {
    groups[technology.group].push(technology)

    return groups
  },
  {
    front: [],
    back: [],
    banco: [],
    ferramentas: [],
    servicos: [],
  },
)

const technologyGroups = technologyGroupsOrder
  .map((group) => ({
    group,
    technologies: technologiesByGroup[group],
  }))
  .filter(({ technologies }) => technologies.length > 0)

export function CardTechnology() {
  return (
    <Wrapper>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-primary font-bold text-sm">STACK</h2>
          <Title>Tecnologias</Title>
        </div>
        <button
          type="button"
          className="flex items-center gap-4 border border-primary rounded-lg py-3 px-4 h-fit font-bold cursor-pointer"
        >
          Ver todas <div className="h-fit p-1 bg-primary rounded-full"></div>
        </button>
      </div>

      <TechnologyList>
        {technologyGroups.map(({ group, technologies }) => (
          <div className="flex flex-col" key={group}>
            <span className="text-xxs text-gray-500 capitalize">
              {technologyGroupLabels[group]}
            </span>
            <div className="flex gap-6 border border-border p-4 rounded-xl">
              {technologies.map(({ imagePath, name }) => (
                <TechnologyImage
                  key={imagePath}
                  src={imagePath}
                  alt={name}
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
        ))}
      </TechnologyList>
    </Wrapper>
  )
}
