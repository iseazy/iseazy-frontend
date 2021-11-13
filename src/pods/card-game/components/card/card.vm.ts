export interface CardVm {
	id: string;
	image: CardImgVm;
	imageIsUp: boolean;
	isMatched: boolean;
	position: number;
}

export interface CardImgVm {
	id: string;
	src: string;
	height: number;
	width: number;
}

export const createInitialCardImgVm = (): CardImgVm => ({
	id: '',
	src: '',
	height: 0,
	width: 0,
});

export const createInitialCardVm = (): CardVm => ({
	id: '',
	imageIsUp: false,
	isMatched: false,
	image: null,
	position: 0,
});
