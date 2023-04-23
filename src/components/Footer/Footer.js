import { FooterStyled, Desk } from './Footer.styled';
import { Container } from 'globalStyles/Global.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Desk>
          © 2023 | All Rights Reserved | Developed by Anastasiia Gudymenko
        </Desk>
      </Container>
    </FooterStyled>
  );
};
