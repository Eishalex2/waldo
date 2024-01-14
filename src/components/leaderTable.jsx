import { useContext } from 'react';
import GameContext from '../context';
import styles from '../styles/leaderTable.module.css';

const LeaderTable = ({ currentGame, gameId }) => {
  const { leaders } = useContext(GameContext);

  let place = 1;

  function timeFormatting(completionTime) {
    const hrs = Math.floor(completionTime / 3600);
    const mins = Math.floor((completionTime % 3600) / 60);
    const secs = Math.floor(completionTime % 60);

    let time = ''

    if (hrs > 0) {
      time += hrs + 'h ';
    }
  
    if (mins > 0) {
      time += mins + 'm ';
    }
  
    time += secs + 's';

    return time;
  }

  return (
    <div className={styles.lbTable}>
      <h2 className={styles.gameTitle}>{currentGame.title}</h2>
      <table className={styles.table}>
        <thead>
          {leaders && (
            <tr className={styles.tableHeaderRow}>
              <th>Rank</th>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          )}

        </thead>
        <tbody className={styles.tableBody}>
          {leaders && (
            leaders.filter((obj) => obj.game === gameId)
            .map((leader) => {
              return (
                <tr key={leader._id} className={styles.tableRow}>
                  <td>{place++}</td>
                  <td>{leader.username}</td>
                  <td>{timeFormatting(leader.completion_time)}</td>
                  <td>{new Date(leader.timestamp).toLocaleDateString()}</td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default LeaderTable;