import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Wrapper = styled.div`
  height: 100vh;
  width: 80%;
  margin: 4rem auto;
  color: var(--primary-color);
  @media(max-width: ${sizes.sm}) {
    width: 90%;
  }
`

export const Container = styled.div`
  background-color: #495057;
  padding: 2rem;
  border-radius: 10px;

  @media(max-width: ${sizes.sm}) {
    padding: 1rem;
  }
`
export const StyledHeader = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin-left: 4rem;
  margin-bottom: 3rem;

  @media(max-width: ${sizes.sm}) {
    font-size: 2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`
