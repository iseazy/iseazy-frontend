import Modal from "react-modal"
import { DateTime } from "luxon"

import BigButton from "./BigButton"

import clock from "../images/clock.svg"

export default function VictoryModal({
    start,
    end,
    onPlayAgain
}) {
    start = DateTime.fromJSDate(start)
    end = DateTime.fromJSDate(end)

    const duration = end.diff(start)

    return <Modal
        isOpen
    >
        <p>
            ¡Completado!
        </p>

        <img src={clock} alt="" />

        <span>
            { duration.toFormat("mm:ss") }
        </span>

        <BigButton
            onClick={onPlayAgain}
        >
            Jugar otra vez
        </BigButton>
    </Modal>
}
