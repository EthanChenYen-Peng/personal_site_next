import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Container = styled.div`
  width: 60%;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #495057;
  color: #CED4DA;
  font-family: 'Mulish';
  line-height: 1.8;

  h1 a, h2 a {
    color: #edf2f4;
    font-weight: 600;
  }

  h3 a,p a {
    color: #faf9f9;
    font-weight: 600;
  }

  h1 a {
    font-size: 2.5rem;
  }

  h3 {
    margin: 1rem;
  }

  h1, h2 {
    margin: 1.5rem;
  }

  @media(max-width: ${sizes.sm}) {
    width: 90%;
    padding: 1rem;
  }
`
