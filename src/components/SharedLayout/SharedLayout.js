import { Outlet } from 'react-router-dom';
import { Container } from 'globalStyles/Global.styled';
import {
  Header,
  ContainerContent,
  ListNav,
  Nav,
  StyledLink,
  ItemNav,
} from './SharedLayout.styled';
import logo from 'images/twitter.png';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <ContainerContent>
            <img width={40} src={logo} alt="logo" />
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
      </Header>
      <main>{<Outlet />}</main>
    </>
  );
};
