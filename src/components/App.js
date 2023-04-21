import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { TweetsPage } from 'pages/Tweets';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
