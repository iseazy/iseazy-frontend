import Modal from "react-modal"
import { DateTime } from "luxon"

import BigButton from "./BigButton"

import clock from "../images/clock.svg"

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        position: "static",
        borderRadius: "20px",
        inset: "auto",
        maxWidth: "500px",
        width: "100%",

        padding: "30px 50px",
    }
}

export default function VictoryModal({
    start,
    end,
    onPlayAgain
}) {
    start = DateTime.fromJSDate(start)
    end = DateTime.fromJSDate(end)

    const duration = end.diff(start)

    return <Modal
        className="shadow-lg bg-white"
        style={customStyles}
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

            <span className="text-3xl text-blcak ml-1">
                { duration.toFormat("m:ss") }
            </span>
        </div>

        <div className="mt-5 flex justify-center">
            <BigButton onClick={onPlayAgain}>
                Jugar otra vez
            </BigButton>
        </div>
    </Modal>
}
