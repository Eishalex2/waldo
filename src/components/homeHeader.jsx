import styles from '../styles/homepage.module.css';
import { Outlet, useNavigate, Link } from 'react-router-dom';

const HomeHeader = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/leaders/6578e1b686bcfb1dda141516");
  }

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.link}><h1>Wimmelbilderbuch</h1></Link>
        <nav>
          <button className={styles.leader} onClick={handleClick}>Leaderboard</button>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default HomeHeader;