import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage } from 'actions'
import PAGES from '../../js/pages'
import brain_lamp from '../../images/brain_lamp.svg'


const Home = (props) => {

    const { dispatch } = props

    const handleCkick = () => {
        dispatch(setCurrentPage(PAGES.GAME))
    }

    return(
        <div className="mem-startpage">
            <div className="mem-dot"><img src={brain_lamp} alt="" /></div>
            <h1 className="mem-MeMemory">MeMemory</h1>
            <button className="mem-button" onClick={handleCkick}>Comenzar</button>
        </div>
    )
}

export default connect()(Home)