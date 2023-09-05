import { Card } from "../interfaces/card.interface"
export const randomizeCards = () => {
    const data: Card[] = [
        {id: 1, cardPairID: 1, flipped: false, content: '3.png', revealed: false},
        {id: 2, cardPairID: 1, flipped: false, content: '3-1.png', revealed: false},
        {id: 3, cardPairID: 2, flipped: false, content: '4.png', revealed: false},
        {id: 4, cardPairID: 2, flipped: false, content: '4-1.png', revealed: false},
        {id: 5, cardPairID: 3, flipped: false, content: '5.png', revealed: false},
        {id: 6, cardPairID: 3, flipped: false, content: '5-1.png', revealed: false},
        {id: 7, cardPairID: 4, flipped: false, content: '8.png', revealed: false},
        {id: 8, cardPairID: 4, flipped: false, content: '8-1.png', revealed: false},
        {id: 9, cardPairID: 5, flipped: false, content: '9.png', revealed: false},
        {id: 10, cardPairID: 5, flipped: false, content: '9-1.png', revealed: false},
        {id: 11, cardPairID: 6, flipped: false, content: '10.png', revealed: false},
        {id: 12, cardPairID: 6, flipped: false, content: '10-1.png', revealed: false},
        {id: 13, cardPairID: 7, flipped: false, content: '15.png', revealed: false},
        {id: 14, cardPairID: 7, flipped: false, content: '15-1.png', revealed: false},
        {id: 15, cardPairID: 8, flipped: false, content: '16.png', revealed: false},
        {id: 16, cardPairID: 8, flipped: false, content: '16-1.png', revealed: false},
        {id: 17, cardPairID: 9, flipped: false, content: '17.png', revealed: false},
        {id: 18, cardPairID: 9, flipped: false, content: '17-1.png', revealed: false}
    ];

    return data.sort(() => Math.random() - 0.5);
}