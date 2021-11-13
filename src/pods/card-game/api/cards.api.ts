import { ImageApiModel } from "./cards-item.api-model";

const imagesList = [
	{
		id: '1',
		src: "img1"

	},
	{
		id: '2',
		src: "img2"
	},
	{
		id: '3',
		src: "img3"
	},
	{
		id: '4',
		src: "img4"
	},
	{
		id: '5',
		src: "img5"

	},
	{
		id: '6',
		src: "img6"

	},
	{
		id: '7',
		src: "img7"

	},
	{
		id: '8',
		src: "img8"

	}
];

export const getImageApiList = (): Array<ImageApiModel> => {
	try {
		return imagesList;
	} catch (exception) {
		throw exception;
	}
};

