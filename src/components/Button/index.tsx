import React, { memo } from 'react';
import { TYPE_BUTTONS } from '../../models/constants';

interface ButtonProps {
    changeClick: () => void
    type: string
}

const Button: React.FC<ButtonProps> = memo(({children, changeClick, type = TYPE_BUTTONS.PRIMARY}) => {
    return (
        <>
            <button className={`btn ${type}`} onClick={changeClick}> 
                {children} 
            </button>
        </>
    );
});

export default Button;