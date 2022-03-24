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
    color: hsl(53deg, 100%, 50%);
    font-weight: 600;
  }

  h3 a,p a {
    color: #64b9e7;
    font-weight: 600;
  }

  h1 a {
    color: white;
    font-size: 2.5rem;
  }

  h1, h2 {
    margin: 1.5rem;
  }

  @media(max-width: ${sizes.sm}) {
    width: 90%;
    padding: 1rem;
  }
`
