import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GameContext from '../context';
import styles from '../styles/gameCard.module.css';
import LeaderTable from '../components/leaderTable';

const Leaderboard = () => {
  const { games } = useContext(GameContext);
  const { gameId } = useParams();

  let navigate = useNavigate();

  function handleClick(gameId) {
    navigate(`/leaders/${gameId}`);
  }

  return (
    <div>
      <h2>Leaderboard</h2>
      <div className={styles.content}>
        {games && (
          games.map((game) => {
            return (
              <div className={styles.card} key={game._id} onClick={() => handleClick(game._id)}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={`https://waldo-api-eishalex.fly.dev/api/image/${game._id}`} alt="" />
                </div>
                <h3>{game.title}</h3>
              </div>
            )
          })
        )}
      </div>
      <LeaderTable gameId={gameId} />
    </div>
  )
}

export default Leaderboard;