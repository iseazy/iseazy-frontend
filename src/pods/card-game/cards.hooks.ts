import React from 'react';
import * as api from './api';
import { CardImgVm } from "./components/card/card.vm";
import { mapImageItemApiListToCardImgVmList, } from "./card-game.mapper";
import { useDispatch } from "react-redux";
import { loadImages } from "./reducer-slice/card-game.slice";

export const useLoad = () => {
	const dispatch = useDispatch();

	const onLoad = React.useCallback(() => {
		try {
			let vmCardImgList: Array<CardImgVm> = [];
			const apiImages = api.getImageApiList();
			vmCardImgList = mapImageItemApiListToCardImgVmList(apiImages);
			dispatch(loadImages(vmCardImgList));
		} catch (error) {
			console.log('error: ', error)
		}
	}, [dispatch]);

	return {
		onLoad,
	};
};

