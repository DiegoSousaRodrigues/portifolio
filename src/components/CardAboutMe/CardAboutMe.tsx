import { IoCodeSlash, IoFlashOutline } from 'react-icons/io5'
import type { ReactNode } from 'react'
import { MdOutlineRocketLaunch } from 'react-icons/md'
import {
  AboutCardsList,
  AboutCopy,
  AboutSection,
  InfoCard,
  InfoCardContent,
  InfoIcon,
} from './CardAboutMe.styles'

export type GradientInfoCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export function GradientInfoCard({
  icon,
  title,
  description,
}: GradientInfoCardProps) {
  return (
    <InfoCard>
      <InfoCardContent>
        <InfoIcon>
          {icon}
        </InfoIcon>
        <span className="text-[19px] font-bold leading-none tracking-normal text-white">
          {title}
        </span>
        <span className="mt-2 text-sm font-medium leading-none tracking-normal text-text-secondary">
          {description}
        </span>
      </InfoCardContent>
    </InfoCard>
  )
}

export function CardAboutMe() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-primary font-bold text-xs">SOBRE MIM</h2>
          <span className="text-2xl font-bold">Mais sobre mim</span>
        </div>
        <p>
          Apaixonado por tecnologia e produto. Atuo há mais de 5 anos criando
          aplicações web modernas, escaláveis e com foco em experiência do
          usuário e performance
        </p>
      </div>
      <div className="flex w-full justify-center gap-3 md:w-2/3 md:justify-end  ">
        <GradientInfoCard
          icon={
            <IoCodeSlash className="drop-shadow-[0_0_14px_rgba(59,130,246,0.85)]" />
          }
          title="+5 anos"
          description="de experiência"
        />
        <GradientInfoCard
          icon={
            <MdOutlineRocketLaunch className="drop-shadow-[0_0_14px_rgba(59,130,246,0.85)]" />
          }
          title="10+"
          description="projetos entregues"
        />
        <GradientInfoCard
          icon={
            <IoFlashOutline className="drop-shadow-[0_0_14px_rgba(59,130,246,0.85)]" />
          }
          title="Foco em"
          description="performance e UX "
        />
      </div>
    </div>
  )
}
