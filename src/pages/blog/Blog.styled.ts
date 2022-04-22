import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Container = styled.div`
  width: 45%;
  padding: 2rem;
  border-radius: 10px;
  color: #ced4da;
  font-family: 'Mulish';
  line-height: 1.8;
  font-size: 19px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;

  @media (max-width: ${sizes.sm}) {
    width: 90%;
    padding: 1rem;
    font-size: 16px;
  }
`
