import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { MainStyled } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainStyled>{<Outlet />}</MainStyled>
      <ScrollToTop smooth color="#04a0e0" />
      <Footer />
    </>
  );
};
