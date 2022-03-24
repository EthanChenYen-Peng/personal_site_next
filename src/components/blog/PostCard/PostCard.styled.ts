import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Container = styled.div`
  background-color: var(--dark-gray-20);
  padding: 2rem;
  border-radius: 10px;
  margin: 4rem 0;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s;
  cursor: pointer;
  color: white;

  &:hover {
    transform: scale(1.05);
  }
  @media(max-width: ${sizes.sm}) {
    padding: 1rem;
    flex-direction: column-reverse;
    gap: 1rem;
  }
`

export const ContentContainer = styled.div`
  width: 50%;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media(max-width: ${sizes.sm}) {
    min-height: 250px;
    width: 100%;
    margin: 0;
  }
`

export const ContentHeader = styled.h2`
  font-size: 2rem;
  font-family: var(--font-family-secondary);
  margin-bottom: 1rem;

  a {
    color: var(--primary-color);
  }

  @media(max-width: ${sizes.sm}) {
    font-size: 1.5rem;
  }
`

export const ContentExcerpt = styled.p`
`

export const ContentLink = styled.button`
  padding: 0.75rem;
  font-weight 500;
  font-size: 1.25rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  cursor: pointer;
  transition: all 0.4s;

  a {
    color: inherit;
  }

  &:hover {
    transform: scale(1.05);
  }

`
