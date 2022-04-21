import styled from 'styled-components'

interface IWrapper {
  open: boolean
}

const rotateAngle = "33deg"
export const Wrapper = styled.div<IWrapper>`
  position: relative;
  width: 33px;
  & > span {
    &::before {
      position: absolute;
      content: '';
      height: 4px;
      width: 100%;
      background-color: var(--secondary-color);
      transition: all 0.4s;
    }
  }

  & > span:nth-of-type(1) {
    &::before {
      transform: ${props => props.open ? `rotate(${rotateAngle}) translateY(-10px)` : "translateY(-10px)"} ;
     transform-origin:  left;
    }
  }

  & > span:nth-of-type(2) {
    &::before {
      width: ${ props => props.open ? "0%" : "100%"}
    }
  }

  & > span:nth-of-type(3) {
    &::before {
      transform: ${props => props.open ? `rotate(-${rotateAngle}) translateY(10px)` : "translateY(10px)"} ;
     transform-origin:  left;
    }
  }


`

