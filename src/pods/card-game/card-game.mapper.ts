import { CardImgVm, CardVm, createInitialCardImgVm, createInitialCardVm } from "./components/card/card.vm";
import { ImageApiModel } from "./api";

export const mapImageItemApiToImageItem = (item: ImageApiModel): CardImgVm => {
	const imageItem = createInitialCardImgVm();
	imageItem.id = item.id;
	imageItem.src = item.src;
	imageItem.width = 100;
	imageItem.height = 100;
	return imageItem;
};

export const mapImageItemApiListToCardImgVmList = (imageList: Array<ImageApiModel>): Array<CardImgVm> => {
	return imageList.map((apiImage) => mapImageItemApiToImageItem(apiImage));
};

const shuffleList = (cards: Array<CardVm>): Array<CardVm> => {
	const sortedCards = cards.sort(() => Math.random() - 0.5);
	sortedCards.forEach((card, index) => {
		card.position = index;
	});
	return sortedCards;
}

export const createCardsListFromCardImgVmList = (imageList: Array<CardImgVm>, multiplicity: number = 2): Array<CardVm> => {
	const cards: Array<CardVm> = [];
	imageList.forEach((vmCardImg, index: number) => {
		for (let i = 0; i < multiplicity; i++) {
			const card = createInitialCardVm();
			card.image = vmCardImg;
			card.id = `${vmCardImg.src}-${i}`;
			cards.push(card);
		}
	});
	return shuffleList(cards);
}
