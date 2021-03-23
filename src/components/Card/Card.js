import React from "react";
import './Card.css';

export default function Card(props) {
	const {image, flip, isFlipped, index} = props;
	return (
		<div className="card__outer" data-spec="boardCard">
			<div className="card">
				<div data-spec="cardInner"
					className={`card__inner ${
						isFlipped ? "card__inner--flipped" : ""
					}`}
				>
					<div className="card__face card__face--back">
						<img data-spec="cardImage"
							className="card__image"
							src={image}
							alt="card"
						></img>
					</div>
					<div data-spec="cardFront"
						className="card__face card__face--front center-content"
						onClick={isFlipped ? undefined : flip}
					>
						<div data-spec="cardNumber" className="card__number">{index}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
