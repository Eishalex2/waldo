import styles from '../styles/homepage.module.css';
import GameCard from '../components/gameCard';
import { useContext } from 'react';
import GameContext from '../context';

const Homepage = () => {
  const { games } = useContext(GameContext);

  return (
    <div className={styles.content}>
      {games && (
        games.map((game) => {
          return (
            <GameCard key={game._id} game={game}/>
          )
        })
      )}
    </div>
  )
}

export default Homepage;