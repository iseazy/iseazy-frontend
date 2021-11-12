import React, { memo } from 'react';
import classes from "./button.component.module.scss"

interface Props {
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<Props> = memo((props) => {
	return (
		<>
			<button data-testid="custom-button"
							onClick={props.onClick}
							className={classes.button}>
				{props.children}
			</button>
		</>
	);
});



