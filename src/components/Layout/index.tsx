import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { GlobalStyle } from "./Layout.styled";

interface Props {
  children: any
}
function Layout({children}: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      { children }
      <Footer />
    </>
  );
}
export default Layout;
