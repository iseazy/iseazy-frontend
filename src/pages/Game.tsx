import { useContext, useState, useEffect, useRef } from 'react';
import AppContext from '../hooks/AppContext';
import { useHistory } from 'react-router';
import CardsContainer from '../containers/CardsContainer';
import ModalVictory from '../components/ModalVictory';

const Game = () => {
    const { state, dispatch } = useContext(AppContext);
    const [timer, setTimer] = useState(0)
    const { hasWon, gameStarted} = state;
    const countRef = useRef<any>(null) //due setInterval doesn't work correctly with useRef types
    const history = useHistory();
    
    if (!state.gameStarted) {
        history.push('/')
    }

    useEffect(() => {
        dispatch({type:'setTime',value:timer})
    }, [hasWon])

    useEffect(() => {
        countRef.current = setInterval(() => {
            setTimer((timer)=> timer + 1);
        }, 1000);
        return () =>{
            setInterval(countRef.current)
        }
    }, [gameStarted])

    return (
        <div>
            {hasWon && <ModalVictory/>}
            <CardsContainer/>
        </div>
    )
}

export default Game
