import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SplashScene } from "./scenes";
import { CardGameScene } from "./scenes/card-game.scene";
import { NotFound } from "./common/components/not-found.component";


const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SplashScene/>}/>
				<Route path="/card-game" element={<CardGameScene/>}/>
				{/*404 fallback*/}
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
