import { createContext } from 'react';

const GameContext = createContext({
  games: [],
  items: [],
  leaders: []
});

export default GameContext;

