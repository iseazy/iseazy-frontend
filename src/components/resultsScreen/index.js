import React from 'react';
import { getTimeInMinutes } from '../../utils/timeUtils';
import './styles.scss';

const ResultsScreen = ({ timePlaying, onClick }) => {
  const time = getTimeInMinutes(timePlaying);

  return (
    <section className="results-screen">
      <div className="results-screen--infobox">
        <p className="results-screen--info">
          <span className="results-screen--msg">¡Completado!</span>
          <span className="results-screen--timer">{time}</span>
        </p>
        <button onClick={onClick}>Jugar otra vez</button>
      </div>
    </section>
  );
};

export default ResultsScreen;
