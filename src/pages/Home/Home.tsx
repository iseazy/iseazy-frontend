import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import { constants } from '../../constants/constants';
import './home.css';

export const Home: FC = () => {
    return (
        <main className="home animate__animated animate__fadeIn">
            <div className="home__image">
                <img src="icon.svg" alt={constants.gameTitle} loading="lazy" />
            </div>
            <h1 className="home__title">{constants.gameTitle}</h1>
            <div className="home__buttons">
                <Link to="/lets-play" className="animate__animated animate__headShake animate__delay-5s">
                    <Button text={constants.buttons.start} className="button"/>
                </Link>
                <Link to="/ranking">
                    <Button text={constants.buttons.ranking} className="outline"/>
                </Link>
            </div>
        </main>
    )
}

export default Home;