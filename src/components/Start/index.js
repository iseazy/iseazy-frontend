import React from "react";
import icon from "../../assets/svg/Brainlightbulb.svg";

export default function Start(props) {
	const {startGame} = props;
	return (
		<div className="start center-content">
			<div className="start__icon-container center-content">
                <img src={icon} alt="icon"></img>
            </div>
			<span className="start__title">MeMemory</span>
			<button className="button" onClick={startGame}>
				Comenzar
			</button>
		</div>
	);
}
