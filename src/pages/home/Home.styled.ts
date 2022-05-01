import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Container = styled.div`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  min-height: 100%;
  overflow: hidden;
`

export const HeroContainer = styled.div`
  font-size: 4rem;
  padding: 5rem 7rem;

  h2:nth-of-type(2) {
    transform: translateX(100px);
    margin-top: 1rem;
  }
  h2:nth-of-type(3) {
    transform: translateX(200px);
    margin-top: 2rem;
  }

  @media (max-width: ${sizes.sm}) {
    font-size: 1.5rem;
    padding: 2.5rem;

    h2:nth-of-type(2) {
      transform: translateX(50px);
      margin-top: 0rem;
    }

    h2:nth-of-type(3) {
      transform: translateX(0px);
      margin-top: 1rem;
    }
  }
`

export const Highlight = styled.span`
  position: relative;
  color: var(--secondary-color);
  padding: 0.7rem;

  white-space: nowrap;
  &::before {
    position: absolute;
    z-index: -1;
    content: '';
    width: 0%;
    transform: rotate(-2deg);
    height: 100%;
    background-color: var(--primary-color);
    animation-name: drawHightlight;
    animation-duration: 0.7s;
    animation-delay: 1.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  @media (max-width: ${sizes.sm}) {
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

export const Highlight2 = styled.span`
  position: relative;
  padding: 0.7rem;
  color: var(--secondary-color);

  white-space: nowrap;
  &::before {
    transform-origin: left top;
    position: absolute;
    z-index: -1;
    content: '';
    width: 0%;
    transform: rotate(2deg);
    height: 100%;
    background-color: #576c6e;
    animation-name: drawHightlight;
    animation-duration: 0.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  @media (max-width: ${sizes.sm}) {
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

  @media (max-width: ${sizes.sm}) {
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

  @media (max-width: ${sizes.sm}) {
    margin-left: 0;
    line-height: 1.25;
  }
`

export const IntroHeader = styled.div`
  font-size: 2rem;
  font-weight: 500;
`

export const AboutHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const AboutHeader = styled.div`
  font-size: 2rem;
  margin: 2rem 0;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 5px;
    background-color: var(--primary-color);
  }
`

export const AboutSectionContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (max-width: ${sizes.sm}) {
    width: 90%;
  }
`
