import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const H1 = styled.h1`
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 5rem;
  text-align: center;
  margin-top: 96px;

  @media (max-width: ${sizes.sm}) {
    font-size: 2rem;
  }
`

export const H2 = styled.h2`
  margin-top: 96px;
  margin-bottom: 24px;

  @media (max-width: ${sizes.sm}) {
    margin-top: 64px;
  }
`

export const H3 = styled.h3`
  margin-top: 48px;
  margin-bottom: 24px;
`
export const ATag = styled.a`
  color: var(--primary-color);
`

export const PTag = styled.p`
  color: var(--primary-color);
  margin-bottom: 24px;
`

export const Ul = styled.ul`
  color: var(--primary-color);
`

export const Li = styled.li`
  color: var(--primary-color);
`

export const Code = styled.code`
  font-size: 0.75rem;
  margin: 2rem 0;
`