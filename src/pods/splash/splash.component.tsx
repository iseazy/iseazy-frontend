import * as React from "react";
import { Button } from "../../common/components/button/button.component";
import { useNavigate } from "react-router-dom";
import { appBaseRoutes } from "../../core";
import classes from "./splash.component.module.scss";

import { ReactComponent as LogoSvg } from './logo.svg';


export const Splash: React.FC = () => {
	let navigate = useNavigate();

	const handleClick = React.useCallback(() => {
		navigate(appBaseRoutes.cardGame)
	}, [navigate]);

	return (
		<>
			<div className={classes.logo}>
				<LogoSvg/>
			</div>
			<h1 className={classes.title}>MeMemory</h1>
			<Button onClick={handleClick}>Comenzar</Button>
		</>
	);
}
