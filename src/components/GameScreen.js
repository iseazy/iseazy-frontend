import { useSelector, useDispatch } from "react-redux"

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

    return <div className="min-h-screen bg-gradient">
        <div className="flex flex-wrap justify-center mx-auto py-4 md:py-7 max-w-xl">
            { cookedCards.map((cookedCard, idx) => <div
                key={cookedCard.id}
                className="p-2"
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
