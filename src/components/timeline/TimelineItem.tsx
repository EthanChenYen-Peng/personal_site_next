import styled, { keyframes } from 'styled-components'

interface Props {
  title: string
  content: string
}
function TimelineItem({ title, content }: Props) {
  return (
    <Container>
      <SideLine />
      <ContentContainer>
        <ItemHeader>{title}</ItemHeader>
        <Content>{content}</Content>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
`

const sidelineHeight = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 280px;
  }
}
`

const showCircle = keyframes`
  0% {
    width: 0px;
    height: 0px;
  }

  100% {
    width: 30px;
    height: 30px;
  }
}
`
const SideLine = styled.div`
  background-color: var(--primary-color);
  width: 10px;
  position: relative;
  height: 0px;

  animation: ${sidelineHeight} 0.5s 1s ease-in both;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0px;
    height: 0px;
    background: inherit;
    transform: translateX(-32%);
    border-radius: 50%;
    animation: ${showCircle} 0.3s 1.5s linear both;
  }
`
const showContent = keyframes`
  0% {
    opacity: 0;
    width: 50%;
  }

  100% {
    opacity: 1;
    width: 100%;
  }
`
const ContentContainer = styled.div`
  width: 100%;
  background: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 10px;
  margin-left: 4rem;
  margin-top: 4rem;
  padding: 2rem;
  animation: ${showContent} 0.5s 1s ease-in-out both;
`

const Content = styled.div`
  font-size: 1.25rem;
  margin-top: 1.5rem;
`

const ItemHeader = styled.h2`
  font-size: 1.5rem;
`
export default TimelineItem
