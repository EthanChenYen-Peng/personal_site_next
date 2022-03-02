import type { NextPage } from "next";
import { Container, HeroContainer, Highlight } from './Home.styled'

const Home: NextPage = () => {
  return (
    <Container>
      <HeroContainer>
        <h2>Hi there, I'm Ethan</h2>
        <h2>
          I am a
          <Highlight>web developer</Highlight>
        </h2>
      </HeroContainer>
    </Container>
  );
};

export default Home;
