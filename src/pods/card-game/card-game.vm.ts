import { CardVm } from "./components/card/card.vm";

export interface CardGameVm {
	cards: CardVm[];
	selectedCards: CardVm[];
	isGameOver: boolean;
	finishTime: number;
}

export const createDefaultCardGameVm = (): CardGameVm => ({
  cards: [],
  selectedCards: [],
	isGameOver: false,
	finishTime: -1
});
