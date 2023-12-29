import styles from '../styles/homepage.module.css';

const Homepage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Wimmelbilderbuch</h1>
        <nav>
          <button className={styles.leader}>Leaderboard</button>
        </nav>
      </header>
      <div className={styles.content}>

      </div>
    </>
  )
}

export default Homepage;