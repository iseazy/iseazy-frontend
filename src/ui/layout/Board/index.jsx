import PropTypes from 'prop-types'

const Board = ({ children }) => {
  return <div className="board">{children}</div>
}

Board.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Board
