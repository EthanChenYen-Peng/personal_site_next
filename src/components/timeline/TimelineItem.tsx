import styled from 'styled-components'

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

const SideLine = styled.div`
  background-color: var(--primary-color);
  width: 10px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 30px;
    height: 30px;
    background: inherit;
    transform: translateX(-33%);
    border-radius: 50%;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  background: var(--primary-color);
  color: var(--secondary-color);
  transition: all 0.5s ease-in-out;
  border-radius: 10px;
  margin-left: 4rem;
  margin-top: 4rem;
  padding: 2rem;
  min-height: 200px;
`

const Content = styled.div`
  font-size: 1.25rem;
  margin-top: 1.5rem;
`

const ItemHeader = styled.h2`
  font-size: 1.5rem;
`
export default TimelineItem
