import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { HomePage } from 'pages/Home';
import { TweetsPage } from 'pages/Tweets';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
