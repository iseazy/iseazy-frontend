import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MemoryBoard, Home } from '../pages';

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/lets-play' element={<MemoryBoard />}/>
            <Route path='*' element={<Home/>} />
        </Routes>
    );
}