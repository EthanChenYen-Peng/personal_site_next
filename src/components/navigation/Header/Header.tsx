import { Wrapper, StyledNav, NavItem} from "./Header.styled";
import ToggleBugger from '@/components/utils/ToggleBugger'
import Link from "next/link";
export default function Header() {
  return (
    <Wrapper>
      Logo
      <ToggleBugger />
      <StyledNav>
        <NavItem>
          <Link href="/"> Home </Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
        <NavItem>Project</NavItem>
        <NavItem>Blog</NavItem>
      </StyledNav>
    </Wrapper>
  );
}
