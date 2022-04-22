import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 5rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  position: relative;
  z-index: 3;
  font-weight: 500;

  @media (max-width: ${sizes.sm}) {
    padding: 0 2rem;
  }
`

export const ToggleBuggerContainer = styled.div`
  display: none;
  @media (max-width: ${sizes.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 25%;
  @media (max-width: ${sizes.sm}) {
    display: none;
  }
`

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;
  }
  list-style-type: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(10px);
    background-color: var(--secondary-color);
    height: 3px;
    width: 0%;
    transition: width 0.5s;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${sizes.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`

export const LogoContainer = styled.div`
  font-size: 1.5rem;
  a {
    color: inherit;
  }
`
