import ReactDOM from 'react-dom';
import * as React from "react";
import classes from "./game-over-dialog.component.module.scss"
import { Button } from "../../../../common/components/button/button.component";
import { ReactComponent as Clock } from './clock.svg';

interface Props {
	isOpen: boolean,
	onHide: () => void,
}

export const GameOverDialog: React.FC<Props> = (props) => {
	const {isOpen, onHide} = props;

	return (
		isOpen ? ReactDOM.createPortal(
			<div className={classes["dialog-overlay"]}>
				<div className={classes["dialog"]} aria-modal aria-hidden role="dialog">
					<div className={classes["dialog-header"]}>
						<h1>¡Completado!</h1>
						<div className={classes["clock-and-time"]}>
							<Clock/>
							<label>1:27</label>
						</div>
					</div>
					<div className={classes["dialog-action"]}>
						<Button onClick={onHide}>Jugar otra vez</Button>
					</div>
				</div>
			</div>, document.body) : null
	)
}

