import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  return <div className="mainLayout">{children}</div>
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
