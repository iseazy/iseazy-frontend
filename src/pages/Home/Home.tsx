import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

import './home.css';

export const Home: FC = () => {
    return (
        <main className="home animate__animated animate__fadeIn">
            <div className="home__image">
                <img src="icon.svg" alt="Memory" />
            </div>
            <h1 className="home__title">MeMemory</h1>
            <div className="home__buttons">
                <Link to="/lets-play" className="animate__animated animate__headShake animate__delay-5s">
                    <Button text="Comenzar" className="button"/>
                </Link>
                <Link to="/ranking">
                    <Button text="Ranking" className="outline"/>
                </Link>
            </div>
        </main>
    )
}

export default Home;