import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/errorPage';
import Homepage from './pages/homepage';
import GameHeader from './pages/gameHeader';
import GamePage from './pages/gamePage';

function Router() {
  const items = [
    { _id: 1, name: "item1" },
    { _id: 2, name: "item2" }
  ];

  function handleSelect(item) {
    console.log(item);
  }

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
        { path: '/game/:id', element: <GamePage items={items} handleSelect={handleSelect} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />
}

export default Router;