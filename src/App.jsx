import GameContext from "./context";
import { useState, useEffect } from 'react';
import Router from "./router";

const Context = () => {
  const [games, setGames] = useState([]);
  const [items, setItems] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [updateLeaders, setUpdateLeaders] = useState(false);

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

  useEffect(() => {
    const loadLeaders = async () => {
      try {
        const response = await fetch("https://waldo-api-eishalex.fly.dev/api/leaders");
        const leaderData = await response.json();
        setLeaders(leaderData)
      } catch (error) {
        setLeaders([]);
        console.log(error);
      }
    }
    loadLeaders();
  }, [updateLeaders]);

  return (
    <GameContext.Provider value={{ games, items, leaders, updateLeaders, setUpdateLeaders }}>
      <Router />
    </GameContext.Provider>
  )
}

export default Context;