import img1 from '../assets/cards/1.png';
import img2 from '../assets/cards/2.png';
import img3 from '../assets/cards/3.png';
import img4 from '../assets/cards/4.png';
import img5 from '../assets/cards/5.png';
import img6 from '../assets/cards/6.png';
import img7 from '../assets/cards/7.png';
import img8 from '../assets/cards/8.png';
import img9 from '../assets/cards/9.png';
import imgBackground from '../assets/card-background.svg';

export interface CardInfo {
  id: number;
  img: string;
  cardId: number;
  match: boolean;
}

export const images: string[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  imgBackground,
]

export const cards: CardInfo[] = [
  { id: 1, cardId: 1, img: img1, match: false },
  { id: 2, cardId: 1, img: img1, match: false },
  { id: 3, cardId: 2, img: img2, match: false },
  { id: 4, cardId: 2, img: img2, match: false },
  { id: 5, cardId: 3, img: img3, match: false },
  { id: 6, cardId: 3, img: img3, match: false },
  { id: 7, cardId: 4, img: img4, match: false },
  { id: 8, cardId: 4, img: img4, match: false },
  { id: 9, cardId: 5, img: img5, match: false },
  { id: 10, cardId: 5, img: img5, match: false },
  { id: 11, cardId: 6, img: img6, match: false },
  { id: 12, cardId: 6, img: img6, match: false },
  { id: 13, cardId: 7, img: img7, match: false },
  { id: 14, cardId: 7, img: img7, match: false },
  { id: 15, cardId: 8, img: img8, match: false },
  { id: 16, cardId: 8, img: img8, match: false },
  { id: 17, cardId: 9, img: img9, match: false },
  { id: 18, cardId: 9, img: img9, match: false },
]