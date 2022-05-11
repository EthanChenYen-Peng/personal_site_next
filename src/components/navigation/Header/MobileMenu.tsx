import { Dialog, Transition, Disclosure } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import { X } from 'react-feather'
import type { INavLink } from './Header'
import Link from 'next/link'

interface Props {
  isOpen: boolean
  closeMenu: () => void
  navLinks: INavLink[]
}
export default function MobileMenu({ isOpen, closeMenu, navLinks }: Props) {
  // Bug with Headless UI Dialog
  // https://github.com/tailwindlabs/headlessui/issues/839
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.documentElement.style.paddingRight = '0px'
      }, /*transition-duration-time*/ 200)
    }
  }, [isOpen])
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={closeMenu} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="flex h-full w-3/5 flex-col justify-center bg-primary text-secondary">
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
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
