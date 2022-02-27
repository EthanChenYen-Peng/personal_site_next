import { Wrapper, StyledNav, NavItem } from './Header.styled'
export default function Header() {
  return (
      <Wrapper>
          Logo
          <StyledNav>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Project</NavItem>
            <NavItem>Blog</NavItem>
          </StyledNav>
      </Wrapper>
      )
}
