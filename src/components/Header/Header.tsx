import { MdArrowForward } from 'react-icons/md'
import BlueCircle from '../BlueCircle'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="text-white flex w-full items-center justify-between h-[60px]">
      <div className="flex items-center text-md font-bold gap-2">
        <div>
          <Image
            alt="logo image"
            src="/images/logo2.png"
            width={40}
            height={40}
          />
        </div>
        <span>DIEGO SOUSA</span>
        <BlueCircle />
      </div>
      <div className="flex gap-2 border-2 items-center border-primary px-5 py-3 rounded-2xl font-bold">
        Vamos conversar
        <MdArrowForward className="fill-primary" size={20} />
      </div>
    </div>
  )
}
