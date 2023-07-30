import { useState } from 'react';
import './MemoryGame.css';
import Board from './components/Board/Board';
import CompletedDialog from './components/CompletedDialog/CompletedDialog';
import { useEffect } from 'react';
import useShuffle from './hooks/useShuffle';
import { getInitialCards } from './utilities/get-initial-cards';
import { formatTime } from './utilities/format-time';

export default function MemoryGame() {
    const [score, setScore] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isCompletedDialogOpen, setIsCompletedDialogOpen] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [initialCards, setInitialCards] = useState(getInitialCards());
    const [cards, setCards] = useShuffle(initialCards);
    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            interval = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isTimerRunning]);
    const onCardClicked = (card) => {
        if (selectedCards.length === 2) {
            return;
        }
        if (card.revealed) {
            return;
        }
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
        card.revealed = true;
        setCards([...cards]);
        setSelectedCards([...selectedCards, card]);
        if (selectedCards.length === 1) {
            if (selectedCards[0].imgSrc === card.imgSrc) {
                setScore(score + 1);
                setSelectedCards([]);
                if (score + 1 === cards.length / 2) {
                    setIsCompletedDialogOpen(true);
                    setIsTimerRunning(false);
                }
            } else {
                setTimeout(() => {
                    selectedCards[0].revealed = false;
                    card.revealed = false;
                    setCards([...cards]);
                    setSelectedCards([]);
                }, 1000);
            }
        }
    };

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
