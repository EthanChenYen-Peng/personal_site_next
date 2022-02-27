import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 33px;
  & > span {
    &::before {
      position: absolute;
      content: '';
      height: 3px;
      width: 100%;
      background-color: var(--secondary-color);
      transition: all 0.4s;
    }
  }

  & > span:nth-of-type(1) {
    &::before {
      transform: ${props => props.open ? "rotate(39deg)" : ""} ;
       transform-origin:  left;
    }
  }
  & > span + span {
    &::before {
      transform: translateY(10px);
    }
  }

  & > span + span + span {
    &::before {
      transform: ${props => props.open ? "translateY(20px) rotate(-39deg)" : "translateY(20px)"} ;
     transform-origin:  left;
    }
  }


`

