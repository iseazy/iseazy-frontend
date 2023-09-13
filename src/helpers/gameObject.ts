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

export const Game = {

    gameState: initialState,

    startNewGame: ( cards: Card[] ) => {
        Game.gameState = {
            ...Game.gameState,
            cards,
            startTime: Date.now()
        }
        return Game.gameState;
    },

    areCardsEqual: ( card1: Card, card2: Card ) => {
        return card1.cardPairID === card2.cardPairID
    },

    isMatched: () => {
        const isMatched = Game.areCardsEqual( Game.gameState.selectedCards[0], Game.gameState.selectedCards[1] );
        if ( isMatched ) {
            Game.gameState = {
                ...Game.gameState,
                isGameOver: Game.gameState.cards.every((c) => c.flipped),
                selectedCards: [],
                endTime: Date.now(),
                totalAttempts: Game.gameState.totalAttempts + 1,
            }
        } else {
            const resetCards = Game.gameState.cards.map((c) => {
                if (c.id === Game.gameState.selectedCards[1].id || c.id === Game.gameState.selectedCards[0].id) {
                    return { ...c, flipped: false };
                }
                return c;
            });
            Game.gameState = {
                ...Game.gameState,
                cards: resetCards,
                selectedCards: [],
                totalAttempts: Game.gameState.totalAttempts + 1,
            }
        }
        return Game.gameState;
    },
    
    handleCardClick: (card: Card ) => {
        const { selectedCards, cards } = Game.gameState;
        if (selectedCards.length > 1) return Game.gameState;
        const updateCards = cards.map((c) => {
            if (c.id === card.id) {
                return { ...c, flipped: true };
            }
            return c;
        });
        Game.gameState = {
            ...Game.gameState,
            cards: updateCards,
            selectedCards: [...selectedCards, card],
        }
        return Game.gameState;
    }
}