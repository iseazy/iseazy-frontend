import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import Home from './Home';  // replace with your actual file path
import GameContext from '../../contexts/GameContext';

// Mocks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../hooks/useTheme', () => ({
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

jest.mock('i18next', () => ({
  t: jest.fn((key) => key),
}));

// Setting up initial mock states and functions
const mockNavigate = useNavigate;

describe('Home', () => {

  beforeEach(() => {
    mockNavigate.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const mockContext = {
      onStartGame: jest.fn(),
    };

    const { getByTestId } = render(
      <GameContext.Provider value={mockContext}>
        <Home />
      </GameContext.Provider>
    );

    expect(getByTestId('home-title-test')).toBeInTheDocument();
    expect(getByTestId('home-button-test')).toBeInTheDocument();
  });

  it('navigates to dashboard after button click and timeout', async () => {
    const mockContext = {
      onStartGame: jest.fn(),
    };

    const { getByTestId } = render(
      <GameContext.Provider value={mockContext}>
        <Home />
      </GameContext.Provider>
    );

    const button = getByTestId('home-button-test');
    fireEvent.click(button);

    // Check if classes have been added to container after click
    const container = document.getElementById('app-container');
    expect(container.classList.contains('animate__animated')).toBe(true);
    expect(container.classList.contains('animate__slideOutLeft')).toBe(true);

    // Simulate the timeout effect
    await act(async () => {
      jest.advanceTimersByTime(500);
    });

    expect(mockNavigate).toHaveBeenCalledWith('dashboard');
  });
});

