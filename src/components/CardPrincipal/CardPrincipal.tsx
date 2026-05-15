import { PrimaryButton } from '@/styles/commum'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdArrowForward, MdOutlineMailOutline } from 'react-icons/md'
import type { CardPrincipalProps } from './CardPrincipal.types'
import { CodeAboutMe } from '../CodeAboutMe'

export function CardPrincipal({}: CardPrincipalProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-bold text-primary">
        FRONT-END ENGINEER SÊNIOR
      </span>
      <div className="flex gap-2">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold leading-tight text-white">
              Construindo{' '}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
                experiências
              </span>{' '}
              digitais de alto impacto
              <span className="text-primary">.</span>
            </h1>
            <span className="text-sm text-gray-400">
              Especialista em React.js, Next.js e arquitetura frontend.
              Transformo ideias complexas em interfaces simples, performáticas e
              escalaveis.
            </span>
            <div>
              <PrimaryButton type="button">
                <span>Ver projetos</span>
                <MdArrowForward />
              </PrimaryButton>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs text-primary">ME SIGA POR AI</span>
            <div className="flex gap-5">
              <button type="button">
                <FaGithub size={24} className="fill-gray-400 cursor-pointer" />
              </button>
              <button type="button">
                <FaLinkedin
                  size={24}
                  className="fill-gray-400 cursor-pointer"
                />
              </button>
              <button type="button">
                <MdOutlineMailOutline
                  size={24}
                  className="fill-gray-400 cursor-pointer"
                />
              </button>
              <button type="button"></button>
            </div>
          </div>
        </div>
        <div>
          <CodeAboutMe />
        </div>
      </div>
    </div>
  )
}
