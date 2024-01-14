import { useContext } from 'react';
import GameContext from '../context';

const LeaderTable = ({ gameId }) => {
  const { games, leaders } = useContext(GameContext);

  const game = games.find((obj) => obj._id === gameId);

  const gameLeaders = leaders.find((obj) => obj.game === gameId);

  return (
    <div>
      <p>{gameId}</p>
    </div>
  )
}

export default LeaderTable;