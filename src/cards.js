import { nanoid } from "nanoid"
import shuffle from "lodash/shuffle"

import { isEven } from "./utils"

import img3 from "./images/cards/Imagen 3.png"
import img4 from "./images/cards/Imagen 4.png"
import img5 from "./images/cards/Imagen 5.png"
import img8 from "./images/cards/Imagen 8.png"
import img9 from "./images/cards/Imagen 9.png"
import img10 from "./images/cards/Imagen 10.png"
import img15 from "./images/cards/Imagen 15.png"
import img16 from "./images/cards/Imagen 16.png"
import img17 from "./images/cards/Imagen 17.png"

const CARD_IMAGES = [img3, img4, img5, img8, img9, img10, img15, img16, img17]

export function createCardDeck(num) {
    if (!isEven(num)) throw new Error("A deck must have an even number of cards.")

    const cards = []
    for (let i = 0; i < num/2; i++) {
        cards.push({
            id: nanoid(),
            img: CARD_IMAGES[i]
        })
        cards.push({
            id: nanoid(),
            img: CARD_IMAGES[i]
        })
    }

    return shuffle(cards)
}

export function checkGameState(cards, flippedIds, { onVictory, onMistake }={}) {
    if (!isEven(flippedIds.length)) return

    const currId = flippedIds.at(-1)
    const prevId = flippedIds.at(-2)

    const curr = cards.find(c => c.id === currId)
    const prev = cards.find(c => c.id === prevId)

    if (curr.img === prev.img) {
        if (flippedIds.length === cards.length) {
            onVictory && onVictory()
        }
    } else {
        onMistake && onMistake(currId, prevId)
    }
}
