import { useSelector } from "react-redux"

import MenuScreen from "./components/MenuScreen"
import GameScreen from "./components/GameScreen"
import VictoryModal from "./components/VictoryModal"

export default function App() {
    const isStarted = useSelector(s => s.startTime !== undefined)
    const isVictory = useSelector(s => s.endTime !== undefined)

    return <>
        { !isStarted && <MenuScreen /> }

        { isStarted && <GameScreen /> }

        { isVictory && <VictoryModal /> }
    </>
}
