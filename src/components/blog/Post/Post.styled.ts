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
  overflow-wrap: break-word;
`

export const Ul = styled.ul`
  color: var(--primary-color);
  overflow-wrap: break-word;
`

export const Li = styled.li`
  color: var(--primary-color);
  overflow-wrap: break-word;
`

export const Code = styled.code`
  font-size: 0.9rem;
  margin: 2rem 0;
`

export const BlockQuote = styled.blockquote`
  border-left: 2px solid black;
  margin: 1.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;

  @media (max-width: ${sizes.sm}) {
    font-size: 1rem;
    margin: 0.5rem;
  }
`
