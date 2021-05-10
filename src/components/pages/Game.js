import React, { Fragment, useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { setMatch, setFirstCard, setSecondCard, resetGame } from 'actions'
import Modal from '../modal/Modal'
import getTimeInterval from '../../js/getTimeInterval'
import CardsBoard from '../cards/CardsBoard'
import clockImage from '../../images/clock.svg'
import useForceRender from '../../js/useForceRender'


const Game = (props) => {

    const { dispatch } = props

    const selfReRender = useForceRender()

    const [ isBoardLocked, setIsBoardLocked ] = useState(false)
    const [ isGameEnded, setIsGameEnded ] = useState(false)
    const [ gameDurationFormatted, setGameDurationFormatted ] = useState("")

    const cards = useSelector( store => store.cards )
    const firstCard = useSelector( store => store.firstCard )
    const secondCard = useSelector( store => store.secondCard )
    const matches = useSelector( store => store.matches )
    const startGameTime = useSelector( store => store.startGameTime )

    const fullMatches = cards.length / 2


    useEffect( () => {
        if ( secondCard ) {

            let timeBlocked = 1200

            setIsBoardLocked(true)

            if ( firstCard === secondCard ){
                dispatch(setMatch(secondCard))
                timeBlocked = 100
            }

            setTimeout( () => {
                setIsBoardLocked(false)

                dispatch(setFirstCard(""))
                dispatch(setSecondCard(""))
            }, timeBlocked)
        }
    }, [secondCard])


    useEffect(() => {
        if ( matches.length == fullMatches ){
            const gameDuration = getTimeInterval(startGameTime, new Date().getTime())

            setGameDurationFormatted(`${gameDuration[0]}:${String(gameDuration[1]).padStart(2, '0')}`)
            setIsGameEnded(true)
        }
    }, [matches])


    const handleCkick = () => {
        setIsGameEnded(false)
        dispatch(resetGame())
        selfReRender()
    }

    return(
        <Fragment>
            { isGameEnded &&
                <Modal>
                    <div className="mem-modal__content--container"> 
                        <div className="mem-modal__content--container-result">
                            <label className="mem-modal__content--container-result__label--completed">¡Completado!</label>
                            <img src={clockImage} alt="" />
                            <label className="mem-modal__content--container-result__label--duration">{gameDurationFormatted}</label>
                        </div>
                        <div className="mem-modal__content--container-button">
                            <button className="mem-modal__content--button" onClick={handleCkick}>Jugar otra vez</button>
                        </div>
                    </div>
                </Modal>
            }

            <CardsBoard isBoardLocked={isBoardLocked}/>
        </Fragment>
    )
}

export default connect()(Game)