import { Container, SocialLinksContainer } from './Footer.styled'
import { Facebook, GitHub, Instagram } from 'react-feather'
function Footer() {
  return (
    <Container>
      © Yen-Peng Chen {new Date().getFullYear()}
      <SocialLinksContainer>
        <GitHub />
        <Facebook />
        <Instagram />
      </SocialLinksContainer>
    </Container>
  )
}

export default Footer
