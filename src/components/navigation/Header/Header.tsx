import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Wrapper,
  StyledNav,
  NavItem,
  ToggleBuggerContainer,
  LogoContainer,
} from './Header.styled'
import ToggleBugger from '@/components/utils/ToggleBugger'
import MobileNav from '@/components/navigation/MobileNav'
export default function Header() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  // Disable scroll when mobile menu is open
  // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
  useEffect(() => {
    if (open) {
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [open])
  return (
    <>
      <Wrapper>
        <LogoContainer>
          <Link href="/" passHref={true}>
            YP
          </Link>
        </LogoContainer>
        <ToggleBuggerContainer>
          <ToggleBugger open={open} onClick={handleClick} />
        </ToggleBuggerContainer>
        <StyledNav>
          <NavItem>
            <Link href="/"> Home </Link>
          </NavItem>
          <NavItem>
            <Link href="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link href="/blog">Blog</Link>
          </NavItem>
        </StyledNav>
      </Wrapper>
      <MobileNav open={open}>
        <NavItem onClick={handleClick}>
          <Link href="/"> Home </Link>
        </NavItem>
        <NavItem onClick={handleClick}>
          <Link href="/projects">Projects</Link>
        </NavItem>
        <NavItem onClick={handleClick}>
          <Link href="/blog">Blog</Link>
        </NavItem>
      </MobileNav>
    </>
  )
}
