import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

import './home.css';

export const Home: FC = () => {
    return (
        <main className="home">
                <div className="home__image">
                    <img src="icon.svg" alt="Memory" />
                </div>
                <h1 className="home__title">MeMemory</h1>
                <Link to="/lets-play">
                    <Button text="Comenzar" />
                </Link>
        </main>
    )
}
