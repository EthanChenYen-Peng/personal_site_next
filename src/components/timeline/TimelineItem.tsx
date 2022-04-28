import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { sizes } from '@/utils/constants'
interface Props {
  title: string
  content: string
}

const container = {
  hidden: {
    transform: 'translateX(-60px)',
    opacity: 0,
  },
  show: {
    transform: 'translateX(0px)',
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
    },
  },
}

const sideLine = {
  hidden: {
    opacity: 0,
    height: '0px',
  },
  show: {
    opacity: 1,
    height: '250px',
    transition: {
      duration: 0.4,
    },
  },
}
function TimelineItem({ title, content }: Props) {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 0.5 })

  if (view) {
    controls.start('show')
  }
  return (
    <Container>
      <SideLine
        ref={element}
        variants={sideLine}
        initial="hidden"
        animate={controls}
      />
      <ContentContainer
        variants={container}
        initial="hidden"
        animate={controls}
      >
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

const SideLine = styled(motion.div)`
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
    transform: translateX(-32%);
    border-radius: 50%;
  }
`
const ContentContainer = styled(motion.div)`
  width: 100%;
  background: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 10px;
  margin-left: 4rem;
  margin-top: 4rem;
  padding: 2rem;

  @media (max-width: ${sizes.sm}) {
    margin-left: 2rem;
    padding: 1rem;
  }
`

const Content = styled.div`
  font-size: 1.25rem;
  margin-top: 1.5rem;
`

const ItemHeader = styled.h2`
  font-size: 1.5rem;
`
export default TimelineItem
