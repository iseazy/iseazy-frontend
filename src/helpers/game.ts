import { Card } from "../pages/MemoryBoard/interfaces/card.interface"

type GameState = {
    cards: Card[],
    isGameOver: boolean,
    selectedCards: Card[],
    startTime: number,
    endTime: number,
    totalAttempts: number
}

const initialState: GameState = {
    cards: [],
    isGameOver: false,
    selectedCards: [],
    startTime: 0,
    endTime: 0,
    totalAttempts: 0
}

const startNewGame = ( cards: Card[] ) => {
    return {
        ...initialState,
        cards,
        startTime: Date.now()
    }
}

const areCardsEqual = ( card1: Card, card2: Card ) => {
    return card1.cardPairID === card2.cardPairID
}

const isMatched = ( gameState: GameState ) => {
    const isMatched = areCardsEqual( gameState.selectedCards[0], gameState.selectedCards[1] );
    if ( isMatched ) {
        return {
            ...gameState,
            isGameOver: gameState.cards.every((c) => c.flipped),
            selectedCards: [],
            endTime: Date.now(),
            totalAttempts: gameState.totalAttempts + 1,
        }
    } else {
        const resetCards = gameState.cards.map((c) => {
            if (c.id === gameState.selectedCards[1].id || c.id === gameState.selectedCards[0].id) {
                return { ...c, flipped: false };
            }
            return c;
        });

        return {
            ...gameState,
            cards: resetCards,
            selectedCards: [],
            totalAttempts: gameState.totalAttempts + 1,
        }
    }
}

const handleCardClick = (gameState: GameState, card: Card ) => {
    const { selectedCards, cards } = gameState;
    if (selectedCards.length > 1) return gameState;
    const updateCards = cards.map((c) => {
        if (c.id === card.id) {
            return { ...c, flipped: true };
        }
        return c;
    });

    return {
        ...gameState,
        cards: updateCards,
        selectedCards: [...selectedCards, card],
    }
}

export {
    handleCardClick,
    initialState,
    isMatched,
    startNewGame
};