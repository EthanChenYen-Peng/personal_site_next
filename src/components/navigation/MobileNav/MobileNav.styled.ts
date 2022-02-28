import styled from "styled-components";
import { sizes } from '@/utils/constants'

export const Wrapper = styled.div`
  display: none;
  @media (max-width: ${sizes.sm}) {
    display: block;
    position: fixed;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    width: 300px;
    height: calc(100vh - 4rem);
    right: 0;
    bottom: 0;
    transform: ${(props) => (props.open ? "" : "translateX(300px)")};
    transition: transform 0.5s;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
  }
`;

export const Overlay = styled.div`
  display: none;
  @media (max-width: ${sizes.sm}) {
    display: block;
    background-color: rgba(90, 90, 90, 0.6);
    position: fixed;
    height: calc(100vh - 4rem);
    bottom: 0;
    left: 0;
    right: 0;
    transform: ${(props) => (props.open ? "" : "translateX(600px)")};
    transition: transform 0.7s;
  }
`;
