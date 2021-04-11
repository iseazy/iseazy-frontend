import PropTypes from 'prop-types'

const CardImage = ({ url, ...rest }) => {
  return (
    <div
      className="cardImage"
      style={{ backgroundImage: `url(${url})` }}
      {...rest}
    />
  )
}

CardImage.propTypes = {
  url: PropTypes.string.isRequired,
}

export default CardImage
