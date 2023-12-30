import styles from '../styles/homepage.module.css';
import GameCard from '../components/gameCard';

const Homepage = ({ games }) => {

  return (
    <>
      <header className={styles.header}>
        <h1>Wimmelbilderbuch</h1>
        <nav>
          <button className={styles.leader}>Leaderboard</button>
        </nav>
      </header>
      <div className={styles.content}>
        {games && (
          games.map((game) => {
            return (
              <GameCard key={game._id} game={game}/>
            )
          })
        )}
      </div>
    </>
  )
}

export default Homepage;