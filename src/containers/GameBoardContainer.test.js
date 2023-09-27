import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GameBoardContainer from './GameBoardContainer';  // replace with your actual file path
import GameContext from '../contexts/GameContext';
import { ROUTE_HOME } from '../routes/routes';

// Mocks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../hooks/useTheme', () => ({
  __esModule: true, // esto es necesario para que funcione como un módulo ES6
  default: () => ({
    currentTheme: {
      background: {
        primary: 'someBackground'
      },
      text: {
        primary: 'someBackground'
      },
      button: {
        primary: 'someBackground'
      }
    }
  })
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Setting up initial mock states and functions
const mockNavigate = useNavigate;
const mockDispatch = useDispatch;

describe('GameBoardContainer', () => {

  beforeEach(() => {
    mockNavigate.mockImplementation(() => jest.fn());
    mockDispatch.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const mockContext = {
      onClickCard: jest.fn(),
      gameState: { boardState: [false, false, false], shuffledImages: ['img1', 'img2', 'img3'], lockedCards: new Set() },
      time: 0,
      onFinishGame: jest.fn(),
      onResetGame: jest.fn(),
    };

    const { getByText } = render(
      <GameContext.Provider value={mockContext}>
        <GameBoardContainer />
      </GameContext.Provider>
    );

    expect(getByText('0')).toBeInTheDocument(); // Timer should display 0 initially
  });

  it('navigates to home if no shuffledImages', () => {
    const mockContext = {
      onClickCard: jest.fn(),
      gameState: { boardState: [], shuffledImages: [], lockedCards: new Set() },
      time: 0,
      onFinishGame: jest.fn(),
      onResetGame: jest.fn(),
    };

    render(
      <GameContext.Provider value={mockContext}>
        <GameBoardContainer />
      </GameContext.Provider>
    );

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_HOME);
  });

  // You can continue adding more test cases, like:
  // - Testing the card click
  // - Testing the game finish flow
  // - Testing game reset and restart

});

