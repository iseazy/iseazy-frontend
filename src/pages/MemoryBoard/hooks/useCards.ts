import { useQuery } from "@tanstack/react-query";
import { loadCollection } from "../../../helpers/loadCollection";

const getCards = async() => {
    const cards = await loadCollection('cards');
    return cards.sort(() => Math.random() - 0.5);
}

export const useCards = () => {
    const cardsQuery = useQuery(
        ['cards'],
        () => getCards(),
        { refetchOnWindowFocus: false }
    );
    return {
        cardsQuery,
    }
}