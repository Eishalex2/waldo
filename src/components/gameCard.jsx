const GameCard = ({ game, handleClick }) => {
  return (
    <div className="card">
      <img src={`https://waldo-api-eishalex.fly.dev/api/image/${game._id}`} alt="" />
      <div>
        <h2>{game.title}</h2>
        <button onClick={handleClick}>Play game</button>
      </div>
    </div>
  )
}

export default GameCard;