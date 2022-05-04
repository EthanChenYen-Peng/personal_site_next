import styled from 'styled-components'
import { sizes } from '@/utils/constants'

export const Wrapper = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: ${sizes.sm}) {
    position: absolute;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    width: 300px;
    height: 100%;
    right: 0;
    bottom: 0;
    transform: ${(props) => (props.open ? '' : `translateX(${sizes.sm})`)};
    transition: transform 0.5s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`

export const Overlay = styled.div<{ open: boolean }>`
  display: none;
  position: relative;
  z-index: 1;
  @media (max-width: ${sizes.sm}) {
    display: block;
    background-color: rgba(90, 90, 90, 0.6);
    position: fixed;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    transform: ${(props) => (props.open ? '' : `translateX(${sizes.sm})`)};
    transition: transform 0.7s;
  }
`
