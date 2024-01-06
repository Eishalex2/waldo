const Alert = ({ color, message }) => {
  return (
    <div id="alert" className={color}>
      {message}
    </div>
  )
}

export default Alert;