import {
  TechnologyImage,
  TechnologyList,
  Title,
  Wrapper,
} from './CardTechnology.styles'
import { Technology } from './CardTechnology.types'

const technologies = [
  {
    group: 'front',
    imagePath: '/svg/javascript.svg',
  },
  {
    group: 'front',
    imagePath: '/svg/typescript.svg',
  },
  {
    group: 'front',
    imagePath: '/svg/react.svg',
  },
  {
    group: 'front',
    imagePath: '/svg/nextjs.svg',
  },
  {
    group: 'front',
    imagePath: '/svg/nodejs.svg',
  },
  {
    group: 'front',
    imagePath: '/svg/tailwindcss.svg',
  },
  {
    group: 'back',
    imagePath: '/svg/postgresql.svg',
  },
  {
    group: 'ferramentas',
    imagePath: '/svg/git.svg',
  },
  {
    group: 'ferramentas',
    imagePath: '/svg/figma.svg',
  },
  {
    group: 'front',
    imagePath: '/svg/flutter.svg',
  },
] satisfies Technology[]

const technologyGroupsOrder = [
  'front',
  'back',
  'ferramentas',
  'outros',
] satisfies Technology['group'][]

type TechnologiesByGroup = Record<Technology['group'], Technology[]>

const technologiesByGroup = technologies.reduce<TechnologiesByGroup>(
  (groups, technology) => {
    groups[technology.group].push(technology)

    return groups
  },
  {
    front: [],
    back: [],
    ferramentas: [],
    outros: [],
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
      <h2 className="text-primary font-bold text-sm">STACK</h2>
      <Title>Tecnologias</Title>
      <TechnologyList>
        {technologyGroups.map(({ group, technologies }) => (
          <div className="flex flex-col" key={group}>
            <span className="text-xxs text-gray-500 capitalize">{group}</span>
            <div className="flex gap-6 border border-border p-4 rounded-xl">
              {technologies.map(({ imagePath }) => (
                <TechnologyImage
                  key={imagePath}
                  src={imagePath}
                  alt={imagePath}
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
