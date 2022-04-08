import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Container = styled.div`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  min-height: 100vh;
`

export const HeroContainer = styled.div`
  font-size: 4rem;
  padding: 5rem 7rem;

  isolation: isolate;
  h2:nth-of-type(2) {
    transform: translateX(200px);
    margin-top: 2rem;
  }

  @media(max-width: ${sizes.sm} ) {
    font-size: 2rem;
    padding: 2rem 1rem;

    h2:nth-of-type(2) {
      transform: translateX(0px);
    }
  }
`

export const Highlight = styled.span`
  position: relative;
  padding: 0.5rem;
  color: var(--secondary-color);

  white-space: nowrap;
  &::before {
    position: absolute;
    z-index: -1;
    content: '';
    width: 0%;
    transform: rotate(1deg);
    height: 100%;
    background-color: var(--primary-color);
    animation-name: drawHightlight;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }


  @media(max-width: ${sizes.sm} ) {

  }
  @keyframes drawHightlight {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }
`


export const AboutContainer = styled.div`
  width: 60%;
  margin: 4rem auto;
  display: flex;
  align-items: center;

  @media(max-width: ${sizes.sm}) {
    flex-direction: column;
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  img {
    border-radius: 10px;
  }
`

export const IntroContainer = styled.div`
  margin-left: 6rem;
  font-size: 1.5rem;
  line-height: 2;

  @media(max-width: ${sizes.sm}) {
    margin-left: 0;
    line-height: 1.25;
  }
`

export const IntroHeader = styled.div`
  font-size: 2rem;
  font-weight: 500;

`
