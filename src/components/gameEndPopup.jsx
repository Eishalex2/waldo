import styles from '../styles/endPopup.module.css';
import LeaderForm from './leaderForm';

const GameEndPopup = ({ gameId, timer }) => {
  const hrs = Math.floor(timer / 3600);
  const mins = Math.floor((timer % 3600) / 60);
  const secs = Math.floor(timer % 60);

  let time = ''

  if (hrs > 0) {
    time += hrs + 'h ';
  }

  if (mins > 0) {
    time += mins + 'm ';
  }

  time += secs + 's';

  return (
    <div className={styles.endContainer}>
      <h2>Congratulations! You finished in {time}.</h2>
      <h3 className={styles.leader}>Add your score to the leaderboard:</h3>
      <LeaderForm gameId={gameId} time={time} />
    </div>
  )

}

export default GameEndPopup;