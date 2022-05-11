import { X } from 'react-feather'
import type { INavLink } from './Header'
import Link from 'next/link'
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'

interface Props {
  isOpen: boolean
  closeMenu: () => void
  navLinks: INavLink[]
}
export default function MobileMenu({ isOpen, closeMenu, navLinks }: Props) {
  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={closeMenu}
      className="fixed inset-0 bg-black/30"
    >
      <DialogContent className="fixed inset-0 flex justify-end">
        <div className="flex h-full w-3/5 flex-col justify-center bg-primary text-secondary">
          <button
            className="fixed top-[16px] right-[40px] focus:outline-none"
            onClick={closeMenu}
          >
            <X className="w-full" />
          </button>
          <ul className="flex flex-col items-start gap-12 pl-10 text-2xl">
            {navLinks.map(({ path, title }) => (
              <li
                onClick={closeMenu}
                key={title}
                className="relative  before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-0 before:bg-secondary before:transition-all before:duration-200 before:content-[''] hover:before:w-full"
              >
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </DialogOverlay>
  )
}
