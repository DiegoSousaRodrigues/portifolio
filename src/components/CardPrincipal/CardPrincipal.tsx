import { PrimaryButton } from '@/styles/commum'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { MdArrowForward, MdOutlineMailOutline } from 'react-icons/md'
import { CodeAboutMe } from '../CodeAboutMe'
import type { CardPrincipalProps } from './CardPrincipal.types'

export function CardPrincipal({}: CardPrincipalProps) {
  return (
    <section className="relative isolate grid min-h-[560px] items-center gap-10 overflow-hidden py-4 lg:grid-cols-[minmax(420px,0.88fr)_minmax(520px,1fr)] lg:gap-8">
      <div className="absolute right-[-4%] top-[-18%] -z-10 h-[420px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,rgba(37,99,235,0.08)_34%,transparent_72%)]" />

      <div className="flex max-w-[620px] flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-bold text-primary">
              FRONT-END ENGINEER SÊNIOR
            </span>

            <h1 className="text-[40px] font-bold leading-[1.08] text-white sm:text-[48px] lg:text-[56px]">
              Construindo{' '}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
                experiências
              </span>{' '}
              digitais de alto impacto
              <span className="text-primary">.</span>
            </h1>
          </div>

          <p className="max-w-[560px] text-base leading-7 text-text-secondary sm:text-[18px] sm:leading-8">
            Especialista em React, Next.js e arquitetura frontend. Transformo
            ideias complexas em interfaces simples, performáticas e escaláveis.
          </p>

          <div className="flex flex-wrap gap-4">
            <PrimaryButton type="button">
              <span>Ver projetos</span>
              <MdArrowForward />
            </PrimaryButton>

            <button
              type="button"
              className="flex items-center gap-3 rounded-[14px] border border-border-strong bg-background/40 px-8 py-3 text-md text-white transition-[border-color,background-color] duration-200 hover:border-white/25 hover:bg-background-secondary"
            >
              <span>Sobre mim</span>
              <FiUser />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-xs font-medium text-primary">ME SIGA POR AÍ</span>
          <div className="flex gap-8">
            <button type="button">
              <FaGithub size={28} className="cursor-pointer fill-gray-400" />
            </button>
            <button type="button">
              <FaLinkedin size={28} className="cursor-pointer fill-gray-400" />
            </button>
            <button type="button">
              <MdOutlineMailOutline
                size={29}
                className="cursor-pointer fill-gray-400"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end">
        <CodeAboutMe />
      </div>
    </section>
  )
}
