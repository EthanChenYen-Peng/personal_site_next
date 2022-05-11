import { X, Menu } from 'react-feather'

interface Props {
  openMenu: () => void
}
export default function MobileMenuBtn({ openMenu }: Props) {
  return (
    <button className="lg:hidden" onClick={openMenu}>
      {<Menu />}
    </button>
  )
}
