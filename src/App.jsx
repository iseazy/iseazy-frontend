import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense  } from 'react';
import './App.css';

const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const MemoryGame = lazy(() => import('./pages/MemoryGame/MemoryGame'));

export default function App() {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/memory-game" element={<MemoryGame />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </React.StrictMode>
  );
}
