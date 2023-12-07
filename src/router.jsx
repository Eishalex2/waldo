import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/errorPage';
import Homepage from './pages/homepage';
import GameHeader from './pages/gameHeader';
import GamePage from './pages/gamePage';

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/game",
      element: <GameHeader />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/game/:id', element: <GamePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />
}

export default Router;