import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routes } from 'routes';
import { HomePage, TweetsPage } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.TWEETS} element={<TweetsPage />} />
        <Route path="*" element={<Navigate to={routes.HOME} replace />} />
      </Route>
    </Routes>
  );
};
