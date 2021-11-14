import React from 'react';
import * as api from './api';
import { CardImgVm } from "./components/card/card.vm";
import { mapImageItemApiListToCardImgVmList, createCardsListFromCardImgVmList} from "./card-game.mapper";
import { useDispatch } from "react-redux";
import { initGame } from "./reducer-slice/card-game.slice";
import {createDefaultCardGameVm} from './card-game.vm';
import {appBaseRoutes} from "../../core";
import {useNavigate} from "react-router-dom";

export const useLoad = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLoad = React.useCallback(() => {
		try {
			let vmCardImgList: Array<CardImgVm> = [];
			const apiImages = api.getImageApiList();
			vmCardImgList = mapImageItemApiListToCardImgVmList(apiImages);
			const cardGameVm = createDefaultCardGameVm();
			cardGameVm.cards = createCardsListFromCardImgVmList(vmCardImgList);
			cardGameVm.imageList = vmCardImgList;
			cardGameVm.startTime = Date.now();
			dispatch(initGame(cardGameVm));
		} catch (error) {
			//When something go wrong go back to index
			dispatch(navigate(appBaseRoutes.splashScreen))
		}
	}, [dispatch]);

	return {
		onLoad,
	};
};

