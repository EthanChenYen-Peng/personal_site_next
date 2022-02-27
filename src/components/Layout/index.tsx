import Header from "@/components/navigation/Header";
import { GlobalStyle } from "./Layout.styled";
function Layout({children}) {
  return (
    <>
      <GlobalStyle />
      <Header />
      { children }
    </>
  );
}
export default Layout;
