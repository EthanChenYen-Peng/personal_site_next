import Header from "@/components/navigation/Header";
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
    </>
  );
}
export default Layout;
