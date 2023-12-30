import { Outlet, Link } from "react-router-dom"
import styles from '../styles/gameHeader.module.css';

const GameHeader = ({ items }) => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/"><h1>Wimmelbilderbuch</h1></Link>
        <p>Timer</p>
        <div className='items'>
          items
        </div>
      </header>
      <Outlet />
    </>

  )
}

export default GameHeader;