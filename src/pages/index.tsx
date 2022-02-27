import type { NextPage } from "next";
import Header from "@/components/navigation/Header";
import { GlobalStyle } from './globals.styled'

const Home: NextPage = () => {
  return (
    <>
    <GlobalStyle/>
      <Header />
      Hello
    </>
  );
};

export default Home;
