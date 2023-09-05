import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MemoryBoard, Home, HighScore } from '../pages';

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/lets-play' element={<MemoryBoard />}/>
            <Route path='/high-score' element={<HighScore />}/>
            <Route path='*' element={<Home/>} />
        </Routes>
    );
}