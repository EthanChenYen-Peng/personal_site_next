import type { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: red;
`

const Home: NextPage = () => {
  return (
  <Wrapper>
  Hello
  </Wrapper>
  )
}

export default Home
