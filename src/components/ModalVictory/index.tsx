import { useContext } from 'react';
import Button from "../Button";
import Title from "../Title";
import AppContext from '../../hooks/AppContext';
import { ModelRouteBackground, ModalRouteContainer, ContentContainer, TextSection, TimeSection, ClockIcon,ButtonSection,TimeText} from './ModalVictory.styleds'

const ModalVictory = () => {
    const { state, dispatch } = useContext(AppContext);

    const onReset = () => dispatch({type:"restart"})
    const formatTime = (time:number) => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = Math.floor(time / 60)
        const getMinutes = `0${minutes % 60}`.slice(-2)
        return ` ${getMinutes}:${getSeconds}`
    }
    return (
        <ModelRouteBackground>
            <ModalRouteContainer>
                <ContentContainer>
                    <TextSection>
                        <Title size="32px">¡Completado!</Title>
                        <TimeSection>
                            <ClockIcon src='./clock.svg' />
                            <TimeText>{formatTime(state.time)}</TimeText>
                        </TimeSection>
                    </TextSection>
                </ContentContainer>
                <ButtonSection>
                    <Button onClick={onReset}>Restart</Button>
                </ButtonSection>
            </ModalRouteContainer>
        </ModelRouteBackground>
    )
}

export default ModalVictory;
