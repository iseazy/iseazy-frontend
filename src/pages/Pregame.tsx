import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro'
import Button from '../components/Button'
import Logo from '../components/Logo'
import Title from '../components/Title'
import AppContext from '../hooks/AppContext';

const PregameContainer = styled.div`
    margin: 0 auto;
    width: 900px;
    display: grid;
    align-content: center;
`;

const Pregame = () => {
    const history = useHistory();
    const { dispatch } = useContext(AppContext);
    const initiateGame = () => {
        history.push('/game')
        dispatch({ type: 'start' })
    }
    return (
        <PregameContainer>
            <Logo />
            <Title>MeMemory</Title>
            <Button onClick={initiateGame}>Comenzar</Button>
        </PregameContainer>
    )
}

export default Pregame
