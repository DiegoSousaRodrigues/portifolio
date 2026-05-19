import {
  TechnologyImage,
  TechnologyGroup,
  TechnologyGroupContent,
  TechnologyGroupLabel,
  TechnologyList,
  Wrapper,
} from './CardTechnology.styles'
import { CardHeader } from '../CardHeader'
import { technologyGroups } from '@/data/technologies'

export function CardTechnology() {
  return (
    <Wrapper id="tecnologias">
      <CardHeader eyebrow="STACK" title="Tecnologias" />

      <TechnologyList>
        {technologyGroups.map(({ id, label, technologies }) => (
          <TechnologyGroup key={id}>
            <TechnologyGroupLabel>{label}</TechnologyGroupLabel>
            <TechnologyGroupContent>
              {technologies.map(({ imagePath, name }) => (
                <TechnologyImage
                  key={imagePath}
                  src={imagePath}
                  alt={name}
                  width={32}
                  height={32}
                />
              ))}
            </TechnologyGroupContent>
          </TechnologyGroup>
        ))}
      </TechnologyList>
    </Wrapper>
  )
}
