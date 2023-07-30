import { useCallback, useState } from 'react';
import './MemoryGame.css';
import Board from './components/Board/Board';
import CompletedDialog from './components/CompletedDialog/CompletedDialog';
import useShuffle from './hooks/useShuffle';
import { getInitialCards } from './utilities/get-initial-cards';
import { formatTime } from './utilities/format-time';
import useTimer from './hooks/useTimer';
import useMemoryGame from './useMemoryGame';

export default function MemoryGame() {
    const [isCompletedDialogOpen, setIsCompletedDialogOpen] = useState(false);
    const [initialCards, setInitialCards] = useState(getInitialCards());
    const [cards, setCards] = useShuffle(initialCards);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timer, setTimer] = useTimer(0, isTimerRunning);
    const { selectedCards, handleMismatch, setSelectedCards} = useMemoryGame(cards);
    const onCardClicked = useCallback((card) => {
        if (selectedCards.length > 1 || card.revealed) {
            return;
        }
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
        card.revealed = true;
        setCards([...cards]);
        setSelectedCards([...selectedCards, card]);
        const hasOneCardSelected = selectedCards.length === 1;
        if (hasOneCardSelected) {
            const isAMatch = selectedCards[0].imgSrc === card.imgSrc;
            if (isAMatch) {
                setSelectedCards([]);
                const isCompleted = cards.every(card => card.revealed);
                if (isCompleted) {
                    setIsCompletedDialogOpen(true);
                    setIsTimerRunning(false);
                }
            } else {
                handleMismatch(selectedCards[0], card);
            }
        }
    }, [selectedCards, isTimerRunning, setCards, cards, setSelectedCards, handleMismatch]);

    const handleExit = () => {
        setTimer(0);
        setIsCompletedDialogOpen(false);
        setInitialCards(getInitialCards());
    }

    return (
        <main className='memory-game'>
            <Board cards={cards} onCardClicked={onCardClicked} />
            <CompletedDialog isOpen={isCompletedDialogOpen} time={formatTime(timer)} handleExit={handleExit} />
        </main>
    );
}
