import { CardImgVm, CardVm } from "./components/card/card.vm";

export interface CardGameVm {
	cards: CardVm[];
	currentNumberOfTrials: number;
	numberOfTrialsRecord: number
	isGameOver: boolean;
	finishTime: number;
	imageList: Array<CardImgVm>;
	currentComparingCard: CardVm;
}

export const createDefaultCardGameVm = (): CardGameVm => ({
	cards: [],
	isGameOver: false,
	finishTime: -1,
	currentNumberOfTrials: 0,
	numberOfTrialsRecord: 0,
	imageList: [],
	currentComparingCard: null,
});
