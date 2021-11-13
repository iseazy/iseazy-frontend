import React from 'react';
import * as api from './api';
import { CardImgVm } from "./components/card/card.vm";
import { mapImageItemApiListToCardImgVmList, } from "./card-game.mapper";

interface Props {
	onLoadImages: (images: Array<CardImgVm>) => void;
}

export const useLoad = (props: Props) => {
	const loadImages = React.useCallback(async () => {
		try {
			let vmCardImgList: Array<CardImgVm> = [];
			const apiImages = api.getImageApiList();
			vmCardImgList = mapImageItemApiListToCardImgVmList(apiImages);
			props.onLoadImages(vmCardImgList);
		} catch (error) {
			console.log('error: ', error)
		}
	}, [props]);

	return {
		onLoad: loadImages,
	};
};

