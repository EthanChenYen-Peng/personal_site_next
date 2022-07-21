import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Container,
  AboutSectionContainer,
  AboutHeader,
  AboutHeaderContainer,
} from './Home.styled'
import Timeline from '@/components/timeline'
import { NextSeo } from 'next-seo'

function HeroSection() {
  return (
    <section className="flex flex-col gap-8 py-10 px-5 text-4xl font-semibold md:text-6xl lg:px-20 lg:py-20 lg:text-7xl">
      <h2>Hi there,</h2>
      <h2 className="translate-x-4 lg:translate-x-10">I&apos;m Ethan,</h2>
      <h2 className="translate-x-6 lg:translate-x-32">
        a
        <span className='before:content-[" "] relative px-2 py-1 text-secondary before:absolute before:left-0 before:-z-10 before:h-full before:w-full before:-rotate-1 before:bg-darkgrayblue-200'>
          <span className='before:content-[" "] relative px-2 py-1 text-secondary before:absolute before:left-0 before:-z-10 before:h-full before:w-full before:rotate-2 before:bg-primary'>
            web developer
          </span>
        </span>
      </h2>
    </section>
  )
}
const Home: NextPage = () => {
  return (
    <Container>
      <NextSeo title="Home" />
      <HeroSection />
      <div className="mx-auto my-4 flex flex-col items-center  md:w-10/12 md:flex-row lg:w-9/12 lg:gap-10">
        <div className="flex-1 p-10 lg:p-14">
          <Image
            src="/images/img3.jpg"
            alt="Graduation photo"
            width={400}
            height={500}
            objectFit="cover"
            className=" rounded-lg"
          />
        </div>
        <div className="flex flex-[2] justify-center">
          <div className="w-3/4 text-xl leading-10 lg:w-2/3">
            <h2 className="mb-5 text-2xl font-semibold">
              My name is Yen Peng (Ethan)
            </h2>
            I&apos;m a web developer primarily working in Javascript and Ruby on
            Rails. <br />
            I graduated from Melbourne Uni with a Master in Data Science, during
            which I found interest in programming and web development. <br />
          </div>
        </div>
      </div>

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
