const Target = ({ targetLeft, targetTop }) => {
  return (
    <div className="target" style={{left: targetLeft, top: targetTop}}>
      •
    </div>
  )
}

export default Target;