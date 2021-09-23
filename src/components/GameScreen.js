import { useSelector, useDispatch } from "react-redux"

import "./GameScreen.css"

import { selectCard } from "../store"

import FlipCard from "./FlipCard"

export default function GameScreen() {
    const dispatch = useDispatch()

    const cookedCards = useSelector(({ cards, flippedIds }) => {
        return cards.map(c => {
            return { ...c, flipped: flippedIds.includes(c.id) }
        })
    })

    const handleSelectCard = cardId  => {
        dispatch(selectCard(cardId))
    }

    return <div className="game-screen">
        <div className="game-screen__container">
            { cookedCards.map((cookedCard, idx) => <div
                key={cookedCard.id}
                className="game-screen__card-wrapper"
            >
                <FlipCard
                    cookedCard={cookedCard}
                    num={idx+1}
                    onClick={() => handleSelectCard(cookedCard.id)}
                />
            </div>)}
        </div>
    </div>
}
