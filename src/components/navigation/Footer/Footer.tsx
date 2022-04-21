import { Container, SocialLinksContainer } from './Footer.styled'
import { Facebook, GitHub, Instagram } from 'react-feather'
function Footer() {
  return (
    <Container>
      Copyright © {new Date().getFullYear()}. All Rights Reserved
      <SocialLinksContainer>
        <GitHub />
        <Facebook />
        <Instagram />
      </SocialLinksContainer>
    </Container>
  )
}

export default Footer
