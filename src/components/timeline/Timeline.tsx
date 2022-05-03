import styled from 'styled-components'
import TimelineItem from './TimelineItem'

function Timeline() {
  return (
    <Wrapper>
      {timelineItems.map((item) => (
        <TimelineItem key={item.title} {...item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export interface ITimelineItem {
  title: string
  excerpt?: string
  content?: string
}

const timelineItems: ITimelineItem[] = [
  {
    title: 'Graduated from Syndney Uni',
    excerpt: 'Bachelor degree in Economics',
  },
  {
    title: 'Graduated from Melbourne Uni',
    excerpt: 'Master degree in Data Science',
  },
  {
    title: 'Assistant engineer at KKBOX',
    excerpt: 'Got my first job as a software engineer',
  },
  {
    title: 'Fullstack developer at 5XRuby',
  },
]

export default Timeline
