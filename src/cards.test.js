import {
    createCardDeck,
    checkGameState,
} from "./cards.js"

describe("createCardDeck", () => {
    test("it returns an array of pairs of cards of the length given", () => {
        const cards = createCardDeck(10)
        expect(cards.length).toEqual(10)

        const img2num = {}  // img: string => numCards: number
        for (let card of cards) {
            if (!(card.img in img2num)) img2num[card.img] = 0
            img2num[card.img] += 1
        }

        for (let num of Object.values(img2num)) {
            expect(num).toEqual(2)
        }
    })

    test("it throws if we try to create a deck with an odd number of cards", () => {
        expect(() => {
            createCardDeck(1)
        }).toThrow()
    })

    test("it throws if we run out of images", () => {
        expect(() => {
            createCardDeck(1000000)
        }).toThrow()
    })
})

describe("checkGameState", () => {
    const cards = [
        { id: "1", img: "a.png" },
        { id: "2", img: "a.png" },
        { id: "3", img: "b.png" },
        { id: "4", img: "b.png" },
    ]

    test("it doesn't run any callback if no card was flipped", () => {
        const onVictory = jest.fn()
        const onMistake = jest.fn()

        const flippedIds = []

        checkGameState(cards, flippedIds, { onVictory, onMistake })

        expect(onVictory).not.toHaveBeenCalled()
        expect(onMistake).not.toHaveBeenCalled()
    })

    test("it only runs callbacks if an even number of cards have been flipped", () => {
        const onVictory = jest.fn()
        const onMistake = jest.fn()

        const flippedIds = ["1", "2", "3"]

        checkGameState(cards, flippedIds, { onVictory, onMistake })

        expect(onVictory).not.toHaveBeenCalled()
        expect(onMistake).not.toHaveBeenCalled()
    })

    test("it calls onVictory if we flipped all pairs in order", () => {
        const onVictory = jest.fn()
        const onMistake = jest.fn()

        const flippedIds = ["4", "3", "2", "1"]

        checkGameState(cards, flippedIds, { onVictory, onMistake })

        expect(onVictory).toHaveBeenCalled()
        expect(onMistake).not.toHaveBeenCalled()
    })

    test("it calls onMistake if we flip a wrong pair", () => {
        const onVictory = jest.fn()
        const onMistake = jest.fn()

        const flippedIds = ["4", "1"]

        checkGameState(cards, flippedIds, { onVictory, onMistake })

        expect(onVictory).not.toHaveBeenCalled()
        expect(onMistake).toHaveBeenCalled()
    })
})
