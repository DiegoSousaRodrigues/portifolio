import Image from 'next/image'
import { Wrapper } from './CardTechnology.styles'
import { Technology } from './CardTechnology.types'

export function CardTechnology() {
  const technologies = [
    {
      title: 'Next.js',
      imagePath: '/svg/nextjs.svg',
    },
    {
      title: 'React',
      imagePath: '/svg/react.svg',
    },
  ] satisfies Technology[]

  return (
    <Wrapper>
      <span className="text-3xl font-bold">Tecnologias</span>
      <span className="text-sm font-normal">
        Ferramentas e tecnologias que utilizo para transformar ideas em soluções
      </span>
      <div className="flex gap-4">
        {technologies.map(({ imagePath, title }) => (
          <div key={title} className="flex flex-col gap-1 items-center">
            <div className="p-4 bg-gray-800 rounded-xl">
              <Image
                src={imagePath}
                alt={`${title} logo`}
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <span>{title}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
