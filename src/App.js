import { useState } from "react"
import { nanoid } from "nanoid"
import shuffle from "lodash/shuffle"

import "./App.css"

import MenuScreen from "./components/MenuScreen"
import GameScreen from "./components/GameScreen"
import VictoryModal from "./components/VictoryModal"

import { isEven } from "./utils"
import cardImages from "./cardImages"

const GRACE_TIME = 1000 // ms

function createCardDeck(num) {
    if (!isEven(num)) throw new Error("A deck must have an even number of cards.")

    const newCards = []
    for (let i = 0; i < num/2; i++) {
        newCards.push({
            id: nanoid(),
            img: cardImages[i]
        })
        newCards.push({
            id: nanoid(),
            img: cardImages[i]
        })
    }

    return shuffle(newCards)
}

export default function App() {
    const [startTime, setStartTime] = useState(undefined)
    const [endTime, setEndTime] = useState(undefined)
    const [cards, setCards] = useState([])
    const [flippedIds, setFlippedIds] = useState([])

    const handleStart = () => {
        const newCards = createCardDeck(18)

        setStartTime(new Date())
        setEndTime(undefined)
        setCards(newCards)
        setFlippedIds([])
    }

    const handleSelectCard = cardId => {
        if (flippedIds.includes(cardId)) return

        const ids = flippedIds.concat([cardId])
        if (isEven(ids.length)) {
            const currId = ids.at(-1)
            const prevId = ids.at(-2)

            const curr = cards.find(c => c.id === currId)
            const prev = cards.find(c => c.id === prevId)

            if (curr.img === prev.img) {
                if (ids.length === cards.length) {
                    setEndTime(new Date())
                }
            } else {
                setTimeout(() => {
                    setFlippedIds(ids => {
                        return ids.filter(id => ![currId, prevId].includes(id))
                    })
                }, GRACE_TIME)
            }
        }

        setFlippedIds(ids)
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
