import { Wrapper, StyledNav, NavItem } from './Header.styled'
import Link from 'next/link'
export default function Header() {
  return (
      <Wrapper>
          Logo
          <StyledNav>
          <NavItem>
            <Link href='/'> Home </Link>
          </NavItem>
          <NavItem>
            <Link href='/about'>About</Link>
          </NavItem>
            <NavItem>Project</NavItem>
            <NavItem>Blog</NavItem>
          </StyledNav>
      </Wrapper>
      )
}
