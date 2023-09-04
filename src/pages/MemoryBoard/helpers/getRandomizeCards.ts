import { Card } from "../interfaces/card.interface"
export const randomizeCards = () => {
    const data: Card[] = [
        {id: 1, flipped: false, content: '3.png'},
        {id: 2, flipped: false, content: '3-1.png'},
        {id: 3, flipped: false, content: '4.png'},
        {id: 4, flipped: false, content: '4-1.png'},
        {id: 5, flipped: false, content: '5.png'},
        {id: 6, flipped: false, content: '5-1.png'},
        {id: 7, flipped: false, content: '8.png'},
        {id: 8, flipped: false, content: '8-1.png'},
        {id: 9, flipped: false, content: '9.png'},
        {id: 10, flipped: false, content: '9-1.png'},
        {id: 11, flipped: false, content: '10.png'},
        {id: 12, flipped: false, content: '10-1.png'},
        {id: 13, flipped: false, content: '15.png'},
        {id: 14, flipped: false, content: '15-1.png'},
        {id: 15, flipped: false, content: '16.png'},
        {id: 16, flipped: false, content: '16-1.png'},
        {id: 17, flipped: false, content: '17.png'},
        {id: 18, flipped: false, content: '17-1.png'}
    ];

    return data.sort(() => Math.random() - 0.5);
}