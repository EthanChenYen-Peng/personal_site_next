import { Container, SocialLinksContainer } from './Footer.styled'
import { Facebook, GitHub, Instagram } from 'react-feather'
function Footer() {
  return (
    <Container>
      © Yen-Peng Chen {new Date().getFullYear()}
      <SocialLinksContainer>
        <a
          href="https://github.com/EthanChenYen-Peng"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.facebook.com/yenpeng.chen"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/yenpengchen/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      </SocialLinksContainer>
    </Container>
  )
}

export default Footer
