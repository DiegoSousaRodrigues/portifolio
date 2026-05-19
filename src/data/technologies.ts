export type TechnologyGroupId =
  | 'front'
  | 'back'
  | 'banco'
  | 'ferramentas'
  | 'servicos'

export type Technology = {
  name: string
  group: TechnologyGroupId
  imagePath: string
}

export type TechnologyGroup = {
  id: TechnologyGroupId
  label: string
  technologies: Technology[]
}

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
    imagePath: '/svg/github-white.svg',
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
] satisfies TechnologyGroupId[]

const technologyGroupLabels = {
  front: 'front',
  back: 'back',
  banco: 'banco',
  ferramentas: 'ferramentas',
  servicos: 'serviços',
} satisfies Record<TechnologyGroupId, string>

type TechnologiesByGroup = Record<TechnologyGroupId, Technology[]>

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

export const technologyGroups = technologyGroupsOrder
  .map((group) => ({
    id: group,
    label: technologyGroupLabels[group],
    technologies: technologiesByGroup[group],
  }))
  .filter(({ technologies }) => technologies.length > 0) satisfies TechnologyGroup[]
