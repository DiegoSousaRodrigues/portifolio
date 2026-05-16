import { FiArrowUpRight } from 'react-icons/fi'
import { PrimaryButton } from '@/styles/commum'
import BlueCircle from '../BlueCircle'
import { Wrapper } from './CardContact.styles'
import type { CardContactProps } from './CardContact.types'

export function CardContact({}: CardContactProps) {
  return (
    <Wrapper>
      <div className="flex items-center gap-2 text-primary text-xs font-bold">
        CONTATO <BlueCircle />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-[40px] font-bold leading-[1.08] text-white sm:text-[36px] lg:text-[44px]">
            Vamos construir{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              algo incrível
            </span>{' '}
            juntos?
          </h1>
          <div>
            Estou sempre aberto a boas conversas sobre tecnologia, produtos
            digitais e experiências web. Se quiser trocar uma ideia ou entrar em
            contato, fale comigo por um dos canais ao lado.
          </div>
        </div>
        <div className="w-[calc(100%_/_3_-_16px)]">
          <PrimaryButton type="button" fullWidth>
            <span className="whitespace-nowrap">Entrar em contato</span>
            <FiArrowUpRight size={16} strokeWidth={3} />
          </PrimaryButton>
        </div>
      </div>
    </Wrapper>
  )
}
