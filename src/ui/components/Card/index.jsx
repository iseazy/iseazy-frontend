import PropTypes from 'prop-types'

const Card = ({ onClick, number, ...rest }) => {
  return (
    <div className="card" onClick={onClick} {...rest}>
      <p className="card-text">{number}</p>
    </div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
}

export default Card
