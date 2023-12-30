import styles from '../styles/gameCard.module.css';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ game }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/game/${game._id}`);
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} 
        src={`https://waldo-api-eishalex.fly.dev/api/image/${game._id}`} alt="" />
      </div>
      <h2>{game.title}</h2>
      <button className={styles.btn} onClick={handleClick}>Play game</button>
    </div>
  )
}

export default GameCard;