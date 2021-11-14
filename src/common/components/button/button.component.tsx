import React, {memo} from 'react';
import classes from "./button.component.module.scss"

interface Props {
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<Props> = memo((props) => {
	const {children, onClick} = props;

	return (
		<button onClick={onClick}
				className={classes.button}>
			{children}
		</button>
	);
});
