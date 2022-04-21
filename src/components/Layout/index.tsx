import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import { GlobalStyle } from './Layout.styled'

interface Props {
  children: React.ReactNode
}
function Layout({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Layout
