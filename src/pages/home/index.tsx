import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FinishModal from '../../components/FinishModal';
import { startGame } from '../../redux/actions/gameActions';
import { RootState } from '../../redux/reducers';
import GameScreen from '../gameScreen';
import StartScreen from '../startScreen';

interface HomeProps {}

const Home: React.FC<HomeProps> = memo(() => {
    const dispatch = useDispatch()
    const {isStartGame, isFinishGame} = useSelector((state: RootState) => {
        return {isStartGame: state.gameReducer.isRunning, isFinishGame: state.gameReducer.isFinished}
    })

    const handleStart = useCallback(() => {
        dispatch(startGame())
    }, [dispatch]);
    
    return (
        <>
            { !isStartGame && <StartScreen handleClick={handleStart}/ >}
            { isStartGame && <GameScreen/>}
            { isFinishGame && <FinishModal/>}
        </>
    );
});

export default Home;