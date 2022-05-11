import { useEffect, useState } from 'react'
import Link from 'next/link'
// import {
//   Wrapper,
//   StyledNav,
//   NavItem,
//   ToggleBuggerContainer,
//   LogoContainer,
// } from './Header.styled'
// import ToggleBugger from '@/components/utils/ToggleBugger'
// import MobileNav from '@/components/navigation/MobileNav'
// import { useRouter } from 'next/router'

import MobileMenu from './MobileMenu'
import MobileMenuBtn from './MobileMenuBtn'

// export default function Header() {
//   const [open, setOpen] = useState(false)
//   const router = useRouter()
//   const handleClick = () => {
//     setOpen(!open)
//   }
//   return (
//     <>
//       <Wrapper>
//         <LogoContainer>
//           <Link href="/" passHref={true}>
//             YP
//           </Link>
//         </LogoContainer>
//         <ToggleBuggerContainer>
//           <ToggleBugger open={open} onClick={handleClick} />
//         </ToggleBuggerContainer>
//         <StyledNav>
//           <NavItem className={router.pathname === '/' ? 'active' : ''}>
//             <Link href="/">Home</Link>
//           </NavItem>
//           <NavItem className={router.pathname === '/projects' ? 'active' : ''}>
//             <Link href="/projects">Projects</Link>
//           </NavItem>
//           <NavItem className={router.pathname === '/blog' ? 'active' : ''}>
//             <Link href="/blog">Blog</Link>
//           </NavItem>
//         </StyledNav>
//       </Wrapper>
//       <MobileNav open={open}>
//         <NavItem
//           className={router.pathname === '/' ? 'active' : ''}
//           onClick={handleClick}
//         >
//           <Link href="/"> Home </Link>
//         </NavItem>
//         <NavItem
//           className={router.pathname === '/projects' ? 'active' : ''}
//           onClick={handleClick}
//         >
//           <Link href="/projects">Projects</Link>
//         </NavItem>
//         <NavItem
//           className={router.pathname === '/blog' ? 'active' : ''}
//           onClick={handleClick}
//         >
//           <Link href="/blog">Blog</Link>
//         </NavItem>
//       </MobileNav>
//     </>
//   )
// }

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
    <ul className="hidden gap-6 lg:flex">
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
    { path: '/posts', title: 'Blog' },
  ]
  return (
    <div className="flex justify-between bg-primary py-4 px-10 text-lg text-secondary">
      <Link href="/" passHref={true}>
        YP
      </Link>
      <DesktopNav navLinks={navLinks} />
      <MobileMenuBtn openMenu={() => setIsOpen(true)} />
      <MobileMenu
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
        navLinks={navLinks}
      />
    </div>
  )
}

export default Header
