import React from "react";
import "./Completed.css";
import clock from "../../assets/svg/clock.svg";

export default function Completed(props) {
	const {time, resetGame} = props;

	const timeFormatted = () => {
		const minutes = Math.floor(time / 60000);
		const seconds = ((time % 60000) / 1000).toFixed(0);
		const extraZero = seconds < 10 ? "0" : "";
		return `${minutes}:${seconds}${extraZero}`;
	};

	return (
		<div className="completed__overlay center-content">
			<div className="completed__message-box">
				<div className="completed__message">
					<span
						data-spec="completedTitle"
						className="completed__title"
					>
						¡Completado!
					</span>
					<div className="center-content">
						<img
							data-spec="clockIcon"
							src={clock}
							alt="clock icon"
						></img>
						<span
							data-spec="completedTime"
							className="completed__time"
						>
							{timeFormatted()}
						</span>
					</div>
				</div>
				<div>
					<button data-spec="playAgainButton" className="button" onClick={resetGame}>
						Jugar otra vez
					</button>
				</div>
			</div>
		</div>
	);
}
