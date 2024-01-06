const Timer = ({timer}) => {
  return (
    <span>
      {new Date(timer * 1000).toISOString().slice(11, 19)}
    </span>
  )
}

export default Timer;