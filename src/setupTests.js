import React from 'react';
import '@testing-library/jest-dom';
import { render as rtlRender } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';

import { GameContextProvider } from './api/gameContext';
import { mockDefaultContext } from '../tests/test-utils';

const extractContextOptions = (options) => {
  return {
    context: options?.context ?? mockDefaultContext,
  };
};

const CustomWrapper = ({ context = mockDefaultContext }) => ({ children }) => {
  return (
    <GameContextProvider initialData={context}>{children}</GameContextProvider>
  );
};

const renderWithProvider = (ui, options) => {
  const { context } = extractContextOptions(options);

  return rtlRender(ui, {
    ...options,
    wrapper: CustomWrapper({ context }),
  });
};

export * from '@testing-library/react';
export { act };
export { renderWithProvider as render };
