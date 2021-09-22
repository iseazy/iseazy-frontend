import Modal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import { DateTime } from "luxon"

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
        className="shadow-lg bg-white rounded-lg max-w-lg w-100 py-5 px-6"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-translucent"
        isOpen
    >
        <div className="flex items-center">
            <p className="text-xl text-black">
                ¡Completado!
            </p>

            <img
                className="ml-auto"
                src={clock}
                alt=""
            />

            <time
                dateTime={duration.toISO()}
                className="text-3xl text-black ml-1"
            >
                { duration.toFormat("m:ss") }
            </time>
        </div>

        <div className="mt-5 flex justify-center">
            <BigButton onClick={handlePlayAgainClick}>
                Jugar otra vez
            </BigButton>
        </div>
    </Modal>
}
