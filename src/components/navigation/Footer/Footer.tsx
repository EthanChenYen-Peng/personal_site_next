import { Container, SocialLinksContainer } from "./Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <Container>
      Copyright © {new Date().getFullYear()}. All Rights Reserved
      <SocialLinksContainer>
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
      </SocialLinksContainer>
    </Container>
  );
}

export default Footer;
