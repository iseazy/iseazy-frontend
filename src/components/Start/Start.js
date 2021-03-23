import React from "react";
import './Start.css';
import icon from "../../assets/svg/Brainlightbulb.svg";

export default function Start(props) {
	const {startGame} = props;
	return (
		<div className="start center-content">
			<div className="start__icon-container center-content">
                <img data-spec="bulbIcon" src={icon} alt="bulb icon"></img>
            </div>
			<span data-spec="startTitle" className="start__title">MeMemory</span>
			<button data-spec="startButton" className="button" onClick={startGame}>
				Comenzar
			</button>
		</div>
	);
}
