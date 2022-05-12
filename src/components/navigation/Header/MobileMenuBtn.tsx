// import { X, Menu } from 'react-feather'
import menu from '@/public/images/Menu.svg'

interface Props {
  toggleMenu: () => void
  isOpen: boolean
}
export default function MobileMenuBtn({ toggleMenu, isOpen }: Props) {
  return (
    <button className="z-10 h-[40px] w-[40px] lg:hidden" onClick={toggleMenu}>
      <span
        className={`${
          isOpen ? 'before:rotate-[45deg]' : ''
        } relative left-0 top-[-10px] before:absolute before:h-[2px] before:w-[25px] before:origin-left  before:bg-secondary before:content-[""]`}
      ></span>
      <span
        className={`${
          isOpen ? 'w-0' : ''
        } relative left-0 before:absolute before:h-[2px] before:w-[25px] before:origin-left  before:bg-secondary before:content-[""]`}
      ></span>
      <span
        className={`${
          isOpen ? 'before:rotate-[-45deg]' : ''
        } relative left-0 top-[10px] before:absolute before:h-[2px] before:w-[25px] before:origin-left  before:bg-secondary before:content-[""]`}
      ></span>
    </button>
  )
}
