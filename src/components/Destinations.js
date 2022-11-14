import { useState } from 'react';
import data from '../data.json';
import Destination from './Destination';

export default function Destinations() {
  const destinationsArr = data.destinations;

  const [currentDestination, setCurrentDestination] = useState(destinationsArr[0]);

  const changeDestination = (destinationName) => {
    destinationsArr.forEach(dest => {
      if (dest.name === destinationName) {
        setCurrentDestination(dest)
      }
    })
  }

  return (
    <div className="destinations-page">
      <h2>
        <span>01</span> Pick your destination
      </h2>
      <div className="destination-options">
        <button className={currentDestination.name === 'Moon' ? 'active-btn' : ''} onClick={() => changeDestination('Moon')}>Moon</button>
        <button className={currentDestination.name === 'Mars' ? 'active-btn' : ''} onClick={() => changeDestination('Mars')}>Mars</button>
        <button className={currentDestination.name === 'Europa' ? 'active-btn' : ''} onClick={() => changeDestination('Europa')}>Europa</button>
        <button className={currentDestination.name === 'Titan' ? 'active-btn' : ''} onClick={() => changeDestination('Titan')}>Titan</button>
      </div>
      <Destination {...currentDestination} />
    </div>
  );
}
