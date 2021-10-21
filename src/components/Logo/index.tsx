import React, { memo } from 'react';
import logo from "../../images/game-logo.svg"

interface MemoryLogoProps {}

const MemoryLogo: React.FC<MemoryLogoProps> = memo(() => {
    return (
        <div className="big-logo">
            <img src={logo} alt="Game Logo" />
        </div>
    );
});

export default MemoryLogo;