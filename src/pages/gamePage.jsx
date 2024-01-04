import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Target from '../components/target';
import GameItemSelect from '../components/gameItemSelect';
import styles from '../styles/gamePage.module.css';

const GamePage = ({ items }) => {

  let { id } = useParams();

  const gameItems = items.filter((item) => item.game === id);

  const [xCoord, setXCoord] = useState();
  const [yCoord, setYCoord] = useState();
  const [natX, setNatX] = useState();
  const [natY, setNatY] = useState();
  const [rangeX, setRangeX] = useState();
  const [rangeY, setRangeY] = useState();
  const [targetLeft, setTargetLeft] = useState();
  const [targetTop, setTargetTop] = useState();
  const [selectLeft, setSelectLeft] = useState();
  const [selectTop, setSelectTop] = useState();
  const [showTarget, setShowTarget] = useState(false);
  const [remainingItems, setRemainingItems] = useState(gameItems);
  const [chosenItems, setChosenItems] = useState([]);

  const selectHeight = remainingItems.length * 70;

  function coordConversion(coord, imgDim, natDim) {
    return Math.round((coord / imgDim) * natDim);
    // natural x / natural width = xCoord / image width
    // natural x is what you don't have. So it is xCoord / image width *
    // natural width
  }

  function handleClick(e) {
    if (!showTarget) {
      setShowTarget(true);

      const xCoord = e.pageX;
      const yCoord = e.pageY;
      setXCoord(xCoord);
      setYCoord(yCoord);

      const natX = coordConversion(xCoord, e.target.clientWidth, e.target.naturalWidth);
      const natY = coordConversion(yCoord - e.target.offsetTop, e.target.clientHeight, e.target.naturalHeight);
      const rangeX = coordConversion(40, e.target.clientWidth, e.target.naturalWidth);
      const rangeY = coordConversion(40, e.target.clientHeight, e.target.naturalHeight);
      setNatX(natX);
      setNatY(natY);
      setRangeX(rangeX);
      setRangeY(rangeY);
 
      const imageHeight = e.target.clientHeight;
      // Set to -25 because that's half of the target box width and height
      // (getting the center of the circle)
      setTargetLeft(xCoord - 40 + 'px');
      setTargetTop(yCoord - 40 + 'px');

      if (yCoord < 200) {
        setSelectTop(100 + 'px');
      } else if (yCoord > (imageHeight - (selectHeight / 2))) {
        setSelectTop(imageHeight - selectHeight + 50 + 'px');
      } else {
        setSelectTop(yCoord - (selectHeight / 2) + 'px');
      }

      if (xCoord < (e.target.clientWidth / 3)) {
        setSelectLeft(xCoord + 50 + 'px');
      } else {
        setSelectLeft(xCoord - 150 - 100 + 'px');
      }
    } else {
      setShowTarget(false);
    }
  }



  function handleSelect(item) {
    // const natX = coordConversion(xCoord, e.target.width, e.target.naturalWidth);
    // console.log(natX)
    // console.log(xCoord);
    // have to normalize the coords
    // check if the item is within the boundaries of the target
    // if it is, mark that item as done
    if (
      item.coords.x > natX - rangeX &&
      item.coords.x < natX + rangeX &&
      item.coords.y > natY - rangeY &&
      item.coords.y < natY + rangeY
    ) {
      // you have a match
      console.log("match");
      const items = remainingItems.filter((obj) => obj._id !== item._id);
      setRemainingItems(items);
      setShowTarget(false);
      setChosenItems([...chosenItems, item._id]);
    } else {
      console.log("nope");
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
              console.log("Chosen items: " + chosenItems);
              return (
                <img className={chosenItems.includes(item._id) ? styles.chosen : styles.item}
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
            items={remainingItems} 
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