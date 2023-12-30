import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ErrorPage from './pages/errorPage';
import Homepage from './pages/homepage';
import GamePage from './pages/gamePage';

function Router() {
  const [games, setGames] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await fetch("https://waldo-api-eishalex.fly.dev/api/games");
        const gameData = await response.json();
        setGames(gameData);
      } catch (error) {
        setGames([]);
        console.log(error);
      }
    }
    loadGames();
  }, []);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await fetch("https://waldo-api-eishalex.fly.dev/api/items");
        const itemData = await response.json();
        setItems(itemData);
      } catch (error) {
        setItems([]);
        console.log(error);
      }
    }
    loadItems();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage games={games}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/game/:id",
      element: <GamePage items={items} />,
      errorElement: <ErrorPage />
    },
  ]);
  return <RouterProvider router={router} />
}

export default Router;