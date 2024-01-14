import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/errorPage';
import Homepage from './pages/homepage';
import GamePage from './pages/gamePage';
import HomeHeader from './components/homeHeader';
import Leaderboard from './pages/leaderboard';

function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeHeader />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/leaders/:gameId",
          element: <Leaderboard />
        }
      ]
    },
    {
      path: "/game/:gameId",
      element: <GamePage />,
      errorElement: <ErrorPage />
    },
  ]);
  return <RouterProvider router={router} />
}

export default Router;