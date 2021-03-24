import React, { useState, useEffect, useRef } from 'react'
import arrayCards from '../helpers/cardsData.js'
import shuffle from '../helpers/shuffleArray.js'
import { interval, clear } from '../helpers/timer.js'
import Modal from './Modal'

const RESULT_SUCCESS = 9

function Cards({ setComponentState }) {
    const timerRef = useRef(null);
    const [cardsSelected, setCardsSelected] = useState([])
    const [successCounter, setSuccessCounter] = useState(0)
    const [shuffleArrayCards, setShuffleArrayCards] = useState([])
    //recogemos la lista de cards
    let list = document.getElementsByClassName("card-item")

    //seleccionar cartas
    const selectCard = (card, index) => {
        const verifyCard = cardsSelected.map(item => item.index === card.index)[0]
        // si estamos pulsando la misma card -> no hacemos nada (sin especificación)
        if (verifyCard) {
            return null
        }
        for (let item in list) {
            if (item == index) {
                let element = list[index]
                let imageElement = list[index].getElementsByClassName("card-image")[0]
                imageElement.classList.add("show-card");
                element.classList.add("selected");
            }
        }
        return setCardsSelected(prevState => [...prevState, card])
    }
    //evaluar cartas seleccionadas
    const evalCards = () => {
        if (cardsSelected[0].pairsId === cardsSelected[1].pairsId) {
            setSuccessCounter(successCounter + 1)
        } else {
            //le damos la vuelta a las cards
            setTimeout(() => {
                for (let item in list) {
                    if (list[cardsSelected[item]?.idHtml]) {
                        list[cardsSelected[item]?.idHtml].classList.remove("selected");
                        let imageElement = list[cardsSelected[item]?.idHtml].getElementsByClassName("card-image")[0]
                        imageElement.classList.remove("show-card");
                    }
                }
            }, 1000)
        }
        // vaciamos el array de cartas seleccionadas
        return setCardsSelected([])
    }

    //Main useEffect -> reordenamos el array y seteamos el intervalo
    useEffect(() => {
        setShuffleArrayCards(shuffle(arrayCards))
        if (timerRef.current !== undefined) {
            interval()
        }
    }, [])
    //controlando el par de cartas seleccionadas
    useEffect(() => {
        if (cardsSelected.length === 2) {
            evalCards()
        }
    }, [cardsSelected])
    //controlando el contador de aciertos
    //se podría mejorar muchísimo (más dinámico), en cuanto se metan más cartas el juego dejaría de funcionar =/
    useEffect(() => {
        if (successCounter === RESULT_SUCCESS) {
            clear()
        }
    }, [successCounter])
    return (
        <div className="cards-background">
            <p>Aciertos: {successCounter}</p>
            <p>Tiempo: <span id="timer" ref={timerRef}></span></p>
            <ol className="card-list">
                {
                    shuffleArrayCards?.map((item, index) => {
                        //meehh - Mejorar!!!!
                        item.idHtml = index
                        return (
                            <li className="card-item" key={index} onClick={() => selectCard(item, index)}>
                                <img className={`card-image`} src={require(`../assets/images/${item.image}.png`).default} alt={`card-app-${index}`} title={`card-app-${index}`} />
                            </li>
                        )
                    })
                }
            </ol>
            {successCounter === RESULT_SUCCESS &&
                <Modal setComponentState={setComponentState} time={timerRef.current.innerHTML} />
            }
        </div>
    );
}

export default Cards;
