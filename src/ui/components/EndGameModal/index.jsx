import PropTypes from 'prop-types'

import Button from '../Button'

import { ReactComponent as Clock } from '../../../assets/images/icons/clock.svg'

const EndGameModal = ({ onPlayAgainClick, playedTime }) => {
  return (
    <div className="endGameModal">
      <div className="endGameModal-content">
        <div className="endGameModal-messageContainer">
          <p className="endGameModal-successText">¡Completado!</p>
          <div className="endGameModal-timeContainer">
            <Clock className="endGameModal-clock" />
            <p className="endGameModal-timeText">{playedTime}</p>
          </div>
        </div>
        <div>
          <Button onClick={onPlayAgainClick}>Jugar otra vez</Button>
        </div>
      </div>
    </div>
  )
}

EndGameModal.propTypes = {
  onPlayAgainClick: PropTypes.func.isRequired,
  playedTime: PropTypes.string.isRequired,
}

export default EndGameModal
