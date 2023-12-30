import { Link } from "react-router-dom";

const GameHeader = ({ items }) => {
  return (
    <header>
      <Link to="/"><h1>Wimmelbilderbuch</h1></Link>
      <p>Timer</p>
      <div className='items'>
        items
      </div>
  </header>
  )
}

export default GameHeader;