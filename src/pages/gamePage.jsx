import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Target from '../components/target';
import GameItemSelect from '../components/gameItemSelect';
import styles from '../styles/gamePage.module.css';

const GamePage = ({ items, handleSelect }) => {

  let { id } = useParams();

  const gameItems = items.filter((item) => item.game === id);

  const [targetLeft, setTargetLeft] = useState();
  const [targetTop, setTargetTop] = useState();
  const [selectLeft, setSelectLeft] = useState();
  const [selectTop, setSelectTop] = useState();
  const [showTarget, setShowTarget] = useState(false);

  const selectHeight = gameItems.length * 45;

  function handleClick(e) {
    if (!showTarget) {
      setShowTarget(true);

      const xCoord = e.pageX;
      const yCoord = e.pageY;
      // Set to -25 because that's half of the target box width and height
      // (getting the center of the circle)
      setTargetLeft(xCoord - 25 + 'px');
      setTargetTop(yCoord - 25 + 'px');

      setSelectTop(yCoord - (selectHeight / 2) + 'px');
      if (xCoord < 150) {
        setSelectLeft(xCoord + 40 + 'px');
      } else {
        setSelectLeft(xCoord - 40 - 100 + 'px');
      }
    } else {
      setShowTarget(false);
    }
  }

  return (
    <>
      <header className={styles.header}>
        <Link to="/"><h1>Wimmelbilderbuch</h1></Link>
        <p>Timer</p>
        <div className={styles.itemContainer}>
          {gameItems && (
            gameItems.map((item) => {
              return (
                <img className={styles.item}
                key={item._id} 
                src={`https://waldo-api-eishalex.fly.dev/api/image/${id}/${item._id}`} />
              )
            })
          )}
        </div>
      </header>
      <img onClick={handleClick} className={styles.gameImage} src={`https://waldo-api-eishalex.fly.dev/api/image/${id}`} alt="" />
      {showTarget && (
        <>
          <Target 
            targetLeft={targetLeft}
            targetTop={targetTop}
          />
          <GameItemSelect 
            gameId={id}
            items={gameItems} 
            handleSelect={handleSelect}
            selectLeft={selectLeft}
            selectTop={selectTop}
          />
        </>
      )}
    </>

  )
}

GamePage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleSelect: PropTypes.func
}

export default GamePage;