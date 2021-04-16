import { useContext, useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import styled from 'styled-components/macro'
import AppContext, { Card as ICard } from '../hooks/AppContext';

const CardsContainerStyled = styled.div`
    top: 50%;
    margin: 0 auto;
    width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 15px 5px;
`;
const CardsContainer = () => {
    const { state, dispatch } = useContext(AppContext);
    const [cardsSelected, setCardsSelected] = useState<ICard[]>([])
    const { cards, flipped } = state;

    const handleClickOnCard = (value: ICard) => {
        if (cardsSelected.length < 2) {
            setCardsSelected([...cardsSelected, value])
        } else {
            setCardsSelected([value])
        }
    }

    const cardIsFlipped = (card: ICard) => flipped.some((c: ICard) => c?.index === card.index) || cardsSelected.some((c: ICard) => c.id === card.id);

    const wonConditionAllCardsFlipped = (flipped: ICard[], cards: ICard[]) => cards.every((card) => flipped.some((flippedCardPair) => flippedCardPair.index === card.index))

    useEffect(() => {
        if (wonConditionAllCardsFlipped(flipped, cards)) {
            dispatch({ type: 'won' })
        }
    }, [flipped])

    useEffect(() => {
        if (cardsSelected.length >= 2) {
            if (cardsSelected[0].index === cardsSelected[1].index) {
                dispatch({ type: 'flip', value: cardsSelected[1] })
                setCardsSelected([])
            }
            const timer = setTimeout(() => {
                setCardsSelected([]);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [cardsSelected])

    return (
        <CardsContainerStyled>
            {cards.map((i, index) => <Card
                onClick={() => handleClickOnCard(i)}
                shown={cardIsFlipped(i)}
                index={i.index}
                text={index}
                key={index} />)}
        </CardsContainerStyled>
    )
}

export default CardsContainer
