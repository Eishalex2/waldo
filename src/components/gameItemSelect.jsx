const GameItemSelect = ({ items, handleSelect, selectLeft, selectTop }) => {
  return (
    <div className="item-select" style={{left: selectLeft, top: selectTop}}>
      {items.map((item) => {
        return (
          <div className="item" key={item._id} onClick={handleSelect}>
            <p>Image</p>
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default GameItemSelect;