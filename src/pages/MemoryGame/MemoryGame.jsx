import { useState } from 'react';
import './MemoryGame.css';
import Board from './components/Board/Board';
import CompletedDialog from './components/CompletedDialog/CompletedDialog';
import { useEffect } from 'react';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image8 from './images/8.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import image15 from './images/15.png';
import image16 from './images/16.png';
import image17 from './images/17.png';
import useShuffle from './hooks/useShuffle';
import { getInitialCards } from './utilities/get-initial-cards';

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

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    return (
        <main className='memory-game'>
            <Board cards={cards} onCardClicked={onCardClicked} />
            <CompletedDialog isOpen={isCompletedDialogOpen} time={formatTime(timer)} handleExit={handleExit} />
        </main>
    );
}
