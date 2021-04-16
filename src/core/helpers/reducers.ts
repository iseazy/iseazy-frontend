import { Card } from "../../hooks/AppContext";


export const updateFlippedCardsArray = (array: Card[], value: Card) => {
    const existsAlready = array.some((item) => item.id === value.id)
    if(existsAlready) return array;
    return [...array,value];
}