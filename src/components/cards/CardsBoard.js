import React from 'react'
import { connect, useSelector } from 'react-redux'
import Card from './Card'


const CardsBoard = (props) => {

    const { isBoardLocked } = props
    
    const cards = useSelector(store => store.cards)

    return(
        <div className="mem-container">
            <div className="mem-cards-grid-container">
                {cards.map((card, index) => <Card key={index} value={card} position={index+1} isBoardLocked={isBoardLocked}/>)}
            </div>
        </div>
    )
}

export default connect()(CardsBoard)