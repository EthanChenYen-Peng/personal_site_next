import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Container = styled.footer`
  background-color: var(--blog-wrapper-color);
  color: var(--secondary-color);
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  font-size: 1.25rem;
  @media (max-width: ${sizes.sm}) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 0;
  }
`

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  & > svg {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.3);
    }
  }

  @media (max-width: ${sizes.sm}) {
    & > svg {
      height: 1.75rem;
      width: 1.75rem;
    }
  }
`
