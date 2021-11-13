import { CardImgVm, CardVm } from "./components/card/card.vm";

export interface CardGameVm {
	cards: CardVm[];
	startTime: number;
	imageList: Array<CardImgVm>;
}

export const createDefaultCardGameVm = (): CardGameVm => ({
	cards: [],
	startTime: -1,
	imageList: [],
});
