import React from 'react'

export default function Start(props) {
    const {startGame} = props;
    return (
        <div>
            <button onClick={startGame}>Comenzar</button>
        </div>
    )
}
