import styled from 'styled-components'
import TimelineItem from './TimelineItem'

function Timeline() {
  return (
    <Wrapper>
      <TimelineItem title="Item 1" content="Content 1" />
      <TimelineItem title="Item 1" content="Content 1" />
      <TimelineItem title="Item 1" content="Content 1" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Timeline
