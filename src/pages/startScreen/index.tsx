import React, { memo } from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { TYPE_BUTTONS } from '../../models/constants';

interface StartScreenProps {
    handleClick: () => void
}

const StartScreen: React.FC<StartScreenProps> = memo(({handleClick}) => {
    return (
        <div className="start-display">
            <div className="start-display__container">
                <Logo/>
                <h1 className="start-display__title"> MeMemory </h1>
                <Button changeClick={handleClick} type={TYPE_BUTTONS.PRIMARY}>
                    <span> Comenzar </span> 
                </Button>
            </div>
        </div>
    );
});

export default StartScreen;