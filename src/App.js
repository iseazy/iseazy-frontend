import { useState } from "react"

import MenuScreen from "./components/MenuScreen"
import GameScreen from "./components/GameScreen"
import VictoryModal from "./components/VictoryModal"

import { createCardDeck, checkGameState } from "./cards"

const GRACE_TIME = 1000 // ms

export default function App() {
    const [startTime, setStartTime] = useState(undefined)
    const [endTime, setEndTime] = useState(undefined)
    const [cards, setCards] = useState([])
    const [flippedIds, setFlippedIds] = useState([])

    const handleStart = () => {
        setStartTime(new Date())
        setEndTime(undefined)
        setCards(createCardDeck(18))
        setFlippedIds([])
    }

    const handleSelectCard = cardId  => {
        if (flippedIds.includes(cardId)) return

        const ids = flippedIds.concat([cardId])
        setFlippedIds(ids)

        checkGameState(cards, ids, {
            onVictory: () => {
                setEndTime(new Date())
            },
            onMistake: (currId, prevId) => {
                setTimeout(() => {
                    setFlippedIds(ids => {
                        return ids.filter(id => ![currId, prevId].includes(id))
                    })
                }, GRACE_TIME)
            }
        })
    }

    const cookedCards = cards.map(c => {
        return { ...c, flipped: flippedIds.includes(c.id) }
    })

    const isVictory = endTime !== undefined

    return <>
        { startTime === undefined && <MenuScreen
            onStart={handleStart}
        /> }

        { startTime !== undefined && <GameScreen
            cards={cookedCards}
            onSelectCard={handleSelectCard}
        /> }

        { isVictory && <VictoryModal
            start={startTime}
            end={endTime}
            onPlayAgain={handleStart}
        /> }
    </>
}
