import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

const Home = lazy(() => import('../pages/Home/Home'));
const MemoryBoard = lazy(() => import('../pages/MemoryBoard/MemoryBoard'));
const Ranking = lazy(() => import('../pages/Ranking/Ranking'));

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/lets-play' element={<MemoryBoard />}/>
                <Route path='/ranking' element={<Ranking />}/>
                <Route path='*' element={<Home/>} />
            </Routes>
        </Suspense>
    );
}