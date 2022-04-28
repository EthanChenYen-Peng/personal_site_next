import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Container,
  HeroContainer,
  Highlight,
  AboutContainer,
  IntroContainer,
  ImageContainer,
  IntroHeader,
  AboutSectionContainer,
  AboutHeader,
  AboutHeaderContainer,
} from './Home.styled'
import Timeline from '@/components/timeline'

const Home: NextPage = () => {
  return (
    <Container>
      <HeroContainer>
        <h2>Hi there,</h2>
        <h2>I am Ethan</h2>
        <h2>
          I am a<Highlight>web developer</Highlight>
        </h2>
      </HeroContainer>
      <AboutContainer>
        <ImageContainer>
          <Image
            src="/images/img3.jpg"
            alt="Graduation photo"
            width={400}
            height={500}
            objectFit="cover"
          />
        </ImageContainer>
        <IntroContainer>
          <IntroHeader>My name is Yen Peng (Ethan)</IntroHeader>I am a web
          developer, ...
        </IntroContainer>
      </AboutContainer>

      <AboutSectionContainer>
        <AboutHeaderContainer>
          <AboutHeader>About Me</AboutHeader>
        </AboutHeaderContainer>
        <Timeline />
      </AboutSectionContainer>
    </Container>
  )
}

export default Home
