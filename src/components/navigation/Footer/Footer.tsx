import { Container, SocialLinksContainer } from './Footer.styled'
import { Facebook, GitHub, Instagram, Linkedin } from 'react-feather'
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
        <a
          href="https://www.linkedin.com/in/ethan-chen-a780b0133/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a href="https://medium.com/@ypcethan" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            style={{ fill: 'var(--secondary-color)' }}
          >
            <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
          </svg>
        </a>
      </SocialLinksContainer>
    </Container>
  )
}

export default Footer
