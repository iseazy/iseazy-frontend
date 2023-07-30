import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';
import logo from './logo.svg';
import './Welcome.css';

export default function Welcome() {
    return (
        <main className='welcome'>
            <section className='welcome__center'>
                <div className='welcome__icon'>
                    <img src={logo} alt='MeMemory icon' />
                </div>
                <h1 className='welcome__text'>MeMemory</h1>
                <Link className="welcome__link" to="/memory-game">
                    <Button>Comenzar</Button>
                </Link>
            </section>
        </main>
    );
}
