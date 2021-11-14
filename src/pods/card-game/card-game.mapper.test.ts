import {createCardsListFromCardImgVmList, mapImageItemApiListToCardImgVmList} from "./card-game.mapper";
import * as utils from '../../common/utils';
import * as cardVm from './components/card/card.vm';
import {createInitialCardImgVm, createInitialCardVm} from "./components/card/card.vm";

describe('createCardsListFromCardImgVmList tests', () => {
    it('should return an empty CardVm list when feeding empty data', () => {
        const result = createCardsListFromCardImgVmList([]);
        expect(result.length).toEqual(0);
    });

    it('should call shuffleList', () => {
        const shuffleListSpy = jest
            .spyOn(utils, 'shuffleList')
            .mockReturnValue([]);
        const result = createCardsListFromCardImgVmList([]);
        expect(shuffleListSpy).toHaveBeenCalled();
        expect(shuffleListSpy).toHaveBeenCalledWith([]);
    });

    it('should call createInitialCardVm when receiving a non-empty list of images', () => {
        const createInitialCardVmSpy = jest.spyOn(cardVm, 'createInitialCardVm');
        const result = createCardsListFromCardImgVmList([createInitialCardImgVm()]);
        expect(createInitialCardVmSpy).toHaveBeenCalled();
    });

    it('should call createInitialCardVm twice when multiplicity parameter is the default one', () => {
        const createInitialCardVmSpy = jest.spyOn(cardVm, 'createInitialCardVm').mockReturnValue({
            id: '',
            imageIsUp: false,
            isMatched: false,
            image: null,
        });
        createCardsListFromCardImgVmList([createInitialCardImgVm()]);
        expect(createInitialCardVmSpy).toHaveBeenCalledTimes(2);
    });

    it('should call createInitialCardVm as many times as multiplicity parameter indicates', () => {
        const createInitialCardVmSpy = jest.spyOn(cardVm, 'createInitialCardVm').mockReturnValue({
            id: '',
            imageIsUp: false,
            isMatched: false,
            image: null,
        });
        createCardsListFromCardImgVmList([createInitialCardImgVm()], 5);
        expect(createInitialCardVmSpy).toHaveBeenCalledTimes(5);
    });
});
