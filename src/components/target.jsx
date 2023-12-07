import PropTypes from 'prop-types';

const Target = ({ targetLeft, targetTop }) => {
  return (
    <div className="target" style={{left: targetLeft, top: targetTop}}>
      •
    </div>
  )
}

Target.propTypes = {
  targetLeft: PropTypes.string,
  targetTop: PropTypes.string
}

export default Target;