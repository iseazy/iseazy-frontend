import { useState, useEffect } from "react";
import Card from "../components/Card";
import Timer from "../components/Timer";
import ModalEnd from "../components/ModalEnd";

import "../css/game.css";

// TODO: metodo rapido para la optencion de las imagenes
const cardsImages = [
  { src: "/img/1.png", match: false },
  { src: "/img/2.png", match: false },
  { src: "/img/3.png", match: false },
  { src: "/img/4.png", match: false },
  { src: "/img/5.png", match: false },
  { src: "/img/6.png", match: false },
  { src: "/img/7.png", match: false },
  { src: "/img/8.png", match: false },
  { src: "/img/9.png", match: false },
];

export default function GameMemory({ handleEndGame }) {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  const [timeRecord, setTimeRecord] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Crear una nueva baraja aleatoria al inicio del juego
  useEffect(() => {
    const shuffle = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffle);
  }, []);

  // handle para manejar las selecciones de cartas del jugador
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  // reseteo de las 2 opciones elegidas por el jugador
  const resetChoice = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };

  // efecto que compara las cartas seleccionadas por el jugador y calcula si hacen match
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice?.src === secondChoice?.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        resetChoice();
      } else {
        // pequeño delay para que el jugador le pueda dar tiempo a ver las 2 cartas antes de darles la vuelta
        setTimeout(() => {
          resetChoice();
        }, 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  // Efecto encargado de determinar si se han encontrado todos los pares de cartas y que cambia el estado que lanzar el evento de fin de juego
  useEffect(() => {
    const isGameOver = cards.find((card) => card.match === false);
    if (cards.length > 0 && !isGameOver) {
      setGameOver(true);
    }
  }, [cards]);

  // Actualizacion del tiempo de juego
  const handleTimeRecord = (time) => {
    setTimeRecord(time);
  };

  // Handle que finaliza el juego
  const handleGameOver = () => {
    handleEndGame();
  };

  return (
    <>
      <div data-testid="testid-timer-gameMemory" className="card-grid">
        {cards.map((card) => (
          <Card
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === firstChoice || card === secondChoice || card.match
            }
            comparationInProgress={secondChoice ? true : false}
            key={card.id}
          />
        ))}
      </div>

      <Timer gameOver={gameOver} handleTimeRecord={handleTimeRecord} />

      {gameOver ? (
        <ModalEnd timeRecord={timeRecord} handleGameOver={handleGameOver} />
      ) : (
        ""
      )}
    </>
  );
}
