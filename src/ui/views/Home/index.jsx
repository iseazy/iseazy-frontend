import PropTypes from 'prop-types'

import Button from '../../components/Button'

import { ReactComponent as Bulb } from '../../../assets/images/icons/bulb.svg'

const Home = ({ onClickStart }) => {
  return (
    <div className="home">
      <div className="home-iconContainer">
        <Bulb />
      </div>
      <h1 className="home-title">MeMemory</h1>
      <Button onClick={onClickStart}>Comenzar</Button>
    </div>
  )
}

Home.propTypes = {
  onClickStart: PropTypes.func.isRequired,
}

export default Home
