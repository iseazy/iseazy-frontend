import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { setFirstCard, setSecondCard } from 'actions'
import ReactCardFlip from 'react-card-flip';    


const Card = (props) => {

    const { value, position, isBoardLocked, dispatch } = props

    const [ isFlipped, setIsFlipped ] = useState(false)
    const [ isMatched, setIsMatched ] = useState(false)

    const firstCard = useSelector(store => store.firstCard)
    const matches = useSelector(store => store.matches)

    const frontImage = require(`../../images/cards/${value}.png`).default
    const backImage = require('../../images/cards/card_background.svg').default


    useEffect(() => {
        if ( ! isBoardLocked && ! isMatched ) {
            setIsFlipped(false)
        }
    }, [isBoardLocked])


    useEffect(() => {
        if (matches.includes(value)) {
            setIsMatched(true)
        }

        if (matches.length === 0){
            setIsFlipped(false)
            setIsMatched(false)
        }
    }, [matches])


    const handleClick = () => {
        if ( isFlipped ) return
        if ( isMatched ) return
        if ( isBoardLocked ) return

        setIsFlipped(true)

        if (! firstCard){
            dispatch(setFirstCard(value))
        } else {
            dispatch(setSecondCard(value))
        }
    }

    return(
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="mem-card" onClick={handleClick}>
                <div className="mem-card--bg">
                    <label className="mem-card--bg__label">{position}</label>
                    <img src={backImage} className="mem-card--bg__img" alt=""/>
                </div>
            </div>

            <div className="mem-card" onClick={handleClick}>
                <img className="mem-card__img" src={frontImage} alt=""/> 
            </div>
        </ReactCardFlip>
    )
}

export default connect()(Card)