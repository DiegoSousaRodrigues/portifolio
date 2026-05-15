import { PrimaryButton } from '@/styles/commum'
import { FiArrowUpRight } from 'react-icons/fi'
import { ExperienceCard } from './CardFooter.styles'
import type { CardFooterProps } from './CardFooter.types'

export function CardFooter({}: CardFooterProps) {
  return (
    <div className="flex flex-col">
      <ExperienceCard>
        <div className="flex flex-col gap-1 text-2xl font-bold">
          <span>Vamos contruir</span>
          <span className="text-primary drop-shadow-[0_0_12px_var(--color-primary)]">
            algo incrível juntos?
          </span>
        </div>
        <div className="w-1/3 text-gray-300">
          <span>
            Estou sempre aberto a novos desafios e oportunidades para criar
            soluções impactantes.
          </span>
        </div>
        <PrimaryButton type="button">
          <span>Entrar em contato</span>
          <FiArrowUpRight size={16} strokeWidth={3} />
        </PrimaryButton>
      </ExperienceCard>
      <div className="flex justify-between">
        <div></div>
      </div>
    </div>
  )
}
