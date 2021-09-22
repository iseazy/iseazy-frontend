import { useSelector } from "react-redux"

import MenuScreen from "./MenuScreen"
import GameScreen from "./GameScreen"
import VictoryModal from "./VictoryModal"

export default function App() {
    const isStarted = useSelector(s => s.startTime !== undefined)
    const isVictory = useSelector(s => s.endTime !== undefined)

    return <>
        { !isStarted && <MenuScreen /> }

        { isStarted && <GameScreen /> }

        { isVictory && <VictoryModal /> }
    </>
}
