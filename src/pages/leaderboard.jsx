import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GameContext from '../context';
import styles from '../styles/gameCard.module.css';
import LeaderTable from '../components/leaderTable';

const Leaderboard = () => {
  const { games } = useContext(GameContext);
  const { gameId } = useParams();

  const currentGame = games.find((obj) => obj._id === gameId);

  let navigate = useNavigate();

  function handleClick(gameId) {
    navigate(`/leaders/${gameId}`);
  }

  return (
    <div>
      <h2 className={styles.title}>Leaderboard</h2>
      <div className={styles.content}>
        {games && (
          games.map((game) => {
            return (
              <div className={game._id === gameId ? styles.chosen : styles.leaderCard} key={game._id} onClick={() => handleClick(game._id)}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={`https://waldo-api-eishalex.fly.dev/api/image/${game._id}`} alt="" />
                </div>
                <h3>{game.title}</h3>
              </div>
            )
          })
        )}
      </div>
      <LeaderTable currentGame={currentGame} gameId={gameId} />
    </div>
  )
}

export default Leaderboard;