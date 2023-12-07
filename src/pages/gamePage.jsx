import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Target from '../components/target';

const GamePage = () => {
  let { id } = useParams();
  const [targetLeft, setTargetLeft] = useState();
  const [targetTop, setTargetTop] = useState();

  function handleClick(e) {
    const xCoord = e.clientX;
    const yCoord = e.clientY;

    setTargetLeft(xCoord - 25 + 'px');
    setTargetTop(yCoord - 25 + 'px');
  }

  return (
    <div className='game-image' onClick={handleClick}>
      <h1>Game page {id}</h1>
      <Target 
        targetLeft={targetLeft}
        targetTop={targetTop}
      />
    </div>
  )
}

export default GamePage;