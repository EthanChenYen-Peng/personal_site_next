import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    position: fixed;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    width: 300px;
    height: calc(100vh - 4rem);
    right: 0;
    bottom: 0;
    transform: ${(props) => (!props.open ? "translateX(300px)" : "")};
    transition: transform 0.5s;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
  }
`;
