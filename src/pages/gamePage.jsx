import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Target from '../components/target';
import GameItemSelect from '../components/gameItemSelect';

const GamePage = ({ items, handleSelect}) => {
  let { id } = useParams();
  const [targetLeft, setTargetLeft] = useState();
  const [targetTop, setTargetTop] = useState();
  const [selectLeft, setSelectLeft] = useState();
  const [selectTop, setSelectTop] = useState();
  const [showTarget, setShowTarget] = useState(false);

  const selectHeight = items.length * 45;

  function handleClick(e) {
    if (!showTarget) {
      setShowTarget(true);

      const xCoord = e.clientX;
      const yCoord = e.clientY;
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
    <div className='game-image' onClick={handleClick}>
      <h1>Game page {id}</h1>
      {showTarget && (
        <>
          <Target 
            targetLeft={targetLeft}
            targetTop={targetTop}
          />
          <GameItemSelect 
            items={items} 
            handleSelect={handleSelect}
            selectLeft={selectLeft}
            selectTop={selectTop}
          />
        </>
      )}
    </div>
  )
}

export default GamePage;