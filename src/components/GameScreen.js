import { useSelector, useDispatch } from "react-redux"

import { selectCard } from "../store"

import FlipCard from "./FlipCard"

export default function GameScreen({ onSelectCard }) {
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
            { cookedCards.map((card, idx) => <div
                key={card.id}
                className="p-2"
            >
                <FlipCard
                    card={card}
                    num={idx+1}
                    onClick={() => handleSelectCard(card.id)}
                />
            </div>)}
        </div>
    </div>
}
