import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
