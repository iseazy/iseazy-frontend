import React from 'react'
import { connect, useSelector } from 'react-redux'
import Home from './pages/Home'
import Game from './pages/Game'
import PAGES from '../js/pages'
import 'styles'

const MeMemory = () => {

  const currentPage = useSelector(store => store.currentPage)

  switch ( currentPage ){
    case PAGES.HOME:
      return <Home />
    case PAGES.GAME:
      return <Game />
    default:
      return <Home />
  }
}

export default connect()(MeMemory)