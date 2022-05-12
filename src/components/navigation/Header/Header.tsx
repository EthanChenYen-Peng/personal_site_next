import { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import MobileMenuBtn from './MobileMenuBtn'

export function LinkItem({ path, title }: { path: string; title: string }) {
  return (
    <li className="relative  before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-0 before:bg-secondary before:transition-all before:duration-200 before:content-[''] hover:before:w-full">
      <Link href={path}>{title}</Link>
    </li>
  )
}

export interface INavLink {
  path: string
  title: string
}
function DesktopNav({ navLinks }: { navLinks: INavLink[] }) {
  return (
    <ul className="hidden gap-8 lg:flex">
      {navLinks.map(({ path, title }) => (
        <LinkItem path={path} title={title} key={path} />
      ))}
    </ul>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks: INavLink[] = [
    { path: '/', title: 'Home' },
    { path: '/projects', title: 'Projects' },
    { path: '/blog', title: 'Blog' },
  ]
  return (
    <div className="flex justify-between bg-primary py-4 px-10 text-lg text-secondary">
      <Link href="/" passHref={true}>
        YP
      </Link>
      <DesktopNav navLinks={navLinks} />
      <MobileMenuBtn isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
      <MobileMenu
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
        navLinks={navLinks}
      />
    </div>
  )
}

export default Header
