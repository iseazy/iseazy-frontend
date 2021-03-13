import imagen1 from '../assets/images/Imagen1.png';
import imagen2 from '../assets/images/Imagen2.png';
import imagen3 from '../assets/images/Imagen3.png';
import imagen4 from '../assets/images/Imagen4.png';
import imagen5 from '../assets/images/Imagen5.png';
import imagen6 from '../assets/images/Imagen6.png';
import imagen7 from '../assets/images/Imagen7.png';
import imagen8 from '../assets/images/Imagen8.png';
import imagen9 from '../assets/images/Imagen9.png';

const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
]

export const generateDeck = () => {
    const deck = [];
    initializeDeck(deck);
    shuffleDeck(deck);
    return deck;
}

const initializeDeck = (deck) => {
    for(let i = 0; i < images.length; i++) {
        deck.push({id: i, copyId: i, image: images[i]});
        deck.push({id: i + images.length, copyId: i, image: images[i]});
    }
}

const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}