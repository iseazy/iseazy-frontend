import React from "react";
import './index.css';

export default function Card(props) {
	const {image, flip, isFlipped, index} = props;
	return (
		<div className="card__outer">
			<div className="card">
				<div
					className={`card__inner ${
						isFlipped ? "card__inner--flipped" : ""
					}`}
				>
					<div className="card__face card__face--back">
						<img
							className="card__image"
							src={image}
							alt="card"
						></img>
					</div>
					<div
						className="card__face card__face--front center-content"
						onClick={isFlipped ? undefined : flip}
					>
						<div className="card__number">{index}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
