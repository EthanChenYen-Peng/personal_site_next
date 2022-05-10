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
  Highlight2,
} from './Home.styled'
import Timeline from '@/components/timeline'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <Container>
      <NextSeo title="Home" />
      <HeroContainer>
        <h2>Hi there,</h2>
        <h2>I&apos;m Ethan,</h2>
        <h2>
          a
          <Highlight2>
            <Highlight>web developer</Highlight>
          </Highlight2>
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
          <IntroHeader>My name is Yen Peng (Ethan)</IntroHeader>
          I&apos;m a web developer primarily working in Javascript and Ruby on
          Rails. <br />
          I graduated from Melbourne Uni with a Master in Data Science, during
          which I found interest in programming and web development. <br />
          I&apos;m currently in transition to become more frontend focus.
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
