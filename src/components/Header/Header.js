import { Link } from 'react-router-dom';
import { Container } from 'globalStyles/Global.styled';
import {
  HeaderStyled,
  ContainerContent,
  Nav,
  ListNav,
  ItemNav,
  StyledLink,
} from './Header.styled';
import logo from 'images/twitter.png';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <ContainerContent>
          <Link to="/">
            <img width={40} src={logo} alt="logo" />
          </Link>

          <Nav>
            <ListNav>
              <ItemNav>
                <StyledLink to="/">Home</StyledLink>
              </ItemNav>
              <ItemNav>
                <StyledLink to="/tweets">Tweets</StyledLink>
              </ItemNav>
            </ListNav>
          </Nav>
        </ContainerContent>
      </Container>
    </HeaderStyled>
  );
};
