import { intervalToDuration } from "date-fns";
import { ICard } from "../models/card";

const memes = ['meme1','meme2','meme3','meme4','meme5','meme6','meme7','meme8','meme9'];

const shuffle = (array: string[]): string[] => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
};
export const setStart = () => {
    const cards: ICard[] = [];
    const cardsData = [...memes];
    const duplicateCardsData = [...cardsData.concat(cardsData)];
    const randomizedcardsData = [...shuffle(duplicateCardsData)];
    randomizedcardsData.forEach((name: string, index: number) => {
        cards.push({
            id: index + 1,
            name,
            close: true,
            complete: false
        })
    })
    return cards;
};

export const setCardsMatch = (allCards: ICard[], currentFlippedCards: number[], isFinish: boolean = false): ICard[] => {
    const card1= allCards.find((card: ICard) => card.id === currentFlippedCards[0]) || {} as ICard;
    const card2 = allCards.find((card: ICard) => card.id === currentFlippedCards[1]) || {} as ICard;
    if(card1 && card2 && (card1?.name === card2?.name || isFinish)){
        card1.complete = true
        card2.complete = true
    }else if(card1 && card2) {
        card1.close = true
        card2.close = true
    }
    return [card1, card2]
}

export const calcTotalTime = (startGameDate: Date) => {
    const time = intervalToDuration({
        start: startGameDate,
        end: new Date()
    })
    const formatDate = `${time.minutes}:${time.seconds}`;
    return formatDate;
}