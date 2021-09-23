import Modal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import { DateTime } from "luxon"

import "./VictoryModal.css"

import { start } from "../store"

import BigButton from "./BigButton"

import clock from "../images/clock.svg"

export default function VictoryModal() {
    const dispatch = useDispatch()

    const handlePlayAgainClick = (event) => {
        event.preventDefault()
        dispatch(start())
    }

    const startTime = useSelector(s => DateTime.fromISO(s.startTime))
    const end = useSelector(s => DateTime.fromISO(s.endTime))
    const duration = end.diff(startTime)

    return <Modal
        className="victory-modal"
        overlayClassName="victory-modal__overlay"
        isOpen
    >
        <div className="victory-modal__container">
            <p className="victory-modal__paragraph">
                ¡Completado!
            </p>

            <img
                className="victory-modal__icon"
                src={clock}
                alt=""
            />

            <time
                dateTime={duration.toISO()}
                className="victory-modal__time"
            >
                { duration.toFormat("m:ss") }
            </time>
        </div>

        <div className="victory-modal__btn-container">
            <BigButton onClick={handlePlayAgainClick}>
                Jugar otra vez
            </BigButton>
        </div>
    </Modal>
}
