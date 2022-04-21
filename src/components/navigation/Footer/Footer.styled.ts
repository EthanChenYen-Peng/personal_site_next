import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Container = styled.div`
  background-color: var(--primary-color);
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 5rem;
  @media (max-width: ${sizes.sm}) {
    flex-direction: column-reverse;
    gap: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  }
`

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  & > svg {
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.3);
    }
  }
`
