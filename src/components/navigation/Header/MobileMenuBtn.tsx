import menu from '@/public/images/Menu.svg'

interface Props {
  toggleMenu: () => void
  isOpen: boolean
}
export default function MobileMenuBtn({ toggleMenu, isOpen }: Props) {
  return (
    <button className="z-10 h-[40px] w-[40px] lg:hidden" onClick={toggleMenu}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-primary stroke-secondary"
      >
        <rect width="40" height="40" />
        <line
          x1="5.5"
          y1="10.5"
          x2="34.5"
          y2="10.5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="5.5"
          y1="35.5"
          x2="34.5"
          y2="35.5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="5.5"
          y1="22.5"
          x2="34.5"
          y2="22.5"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}
