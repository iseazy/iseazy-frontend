import React from 'react'

export default function Completed(props) {
    const {time, resetGame} = props;
    return (
        <div className="completed__overlay center-content">
            <div className="completed__message-box">
                <div className="completed__message">
                    <span>¡Completado!</span>
                    <span>icono y tiempo</span>
                </div>
                <div >
                    <button className="button" onClick={resetGame}>Jugar otra vez</button>
                </div>
            </div>
        </div>
    )
}
