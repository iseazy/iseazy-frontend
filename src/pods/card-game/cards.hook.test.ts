import { renderHook, act } from '@testing-library/react-hooks';
import { useLoad } from './cards.hooks';
import * as api from './api/cards.api';
import {appBaseRoutes} from "../../core";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate
}));

describe('useLoad tests', () => {
    it('should call the api when calling it', () => {
        const getImageApiListSpy = jest
            .spyOn(api, 'getImageApiList')
            .mockReturnValue([]);
        const { result } = renderHook(() => useLoad());

        act(() => {
            result.current.onLoad()
        })

        expect(getImageApiListSpy).toHaveBeenCalled();
    });

    it('should call dispatch when calling it ', () => {
        const getImageApiListSpy = jest
            .spyOn(api, 'getImageApiList')
            .mockReturnValue([]);
        const { result } = renderHook(() => useLoad());

        act(() => {
            result.current.onLoad()
        })

        expect(mockDispatch).toHaveBeenCalled();
    });

    it('should navigate to index when api throws an exception', () => {
        jest
            .spyOn(api, 'getImageApiList')
            .mockImplementation(() => {
                throw new Error('Somethin went wrong!')
            });
        const { result } = renderHook(() => useLoad());

        act(() => {
            result.current.onLoad()
        })

        expect(mockNavigate).toHaveBeenCalledWith(appBaseRoutes.splashScreen);
    });
});
