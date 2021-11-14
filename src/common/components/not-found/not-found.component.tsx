import * as React from 'react';
import { Link } from "react-router-dom";

import classes from './not-found.component.module.css';
import { appBaseRoutes } from "../../../core";

export const NotFound: React.FC = () => {
	return (
		<div style={{marginTop: '20vh'}}>
			<p className={classes["not-found"]} aria-label="not-found-paragraph">¡Ups! ¡Page not found! Error 404</p>
			<div className={classes.link}><Link to={appBaseRoutes.splashScreen} aria-label="back-to-index">Back to index</Link></div>
		</div>
	);
}
