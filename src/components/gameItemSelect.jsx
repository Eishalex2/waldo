import PropTypes from 'prop-types';

const GameItemSelect = ({ gameId, items, handleSelect, selectLeft, selectTop }) => {
  return (
    <div className="item-select" style={{left: selectLeft, top: selectTop}}>
      {items.map((item) => {
        return (
          <div className="item" key={item._id} onClick={handleSelect}>
            <img className="item-image" src={`https://waldo-api-eishalex.fly.dev/api/image/${gameId}/${item._id}`} alt="" />
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

GameItemSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleSelect: PropTypes.func,
  selectLeft: PropTypes.string,
  selectTop: PropTypes.string
}

export default GameItemSelect;