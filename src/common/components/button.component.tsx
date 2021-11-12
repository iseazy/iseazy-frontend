import React from 'react';
import classes from "./button.component.module.css"

interface Props {
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<Props> = (props) => {
	return (
		<>
			<button data-testid="custom-button"
							onClick={props.onClick}
							className={classes.button}>
				{props.children}
			</button>
		</>
	);
};



