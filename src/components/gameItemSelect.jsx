import PropTypes from 'prop-types';
import styles from '../styles/gamePage.module.css';

const GameItemSelect = ({ gameId, items, handleSelect, selectLeft, selectTop }) => {
  return (
    <div style={{left: selectLeft, top: selectTop}}>
      {items.map((item) => {
        return (
          <div className="item" key={item._id} onClick={handleSelect}>
            <img src={`https://waldo-api-eishalex.fly.dev/api/image/${gameId}/${item._id}`} alt="" />
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