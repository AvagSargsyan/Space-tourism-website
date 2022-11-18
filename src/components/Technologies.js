import data from '../data.json';
import { useState } from 'react';
import Technology from './Technology';
import '../styles/technologies.scss'

export default function Technologies() {
  const technologiesArr = data.technology;

  const [currentTechnology, setCurrentTechnology] = useState(
    technologiesArr[0]
  );

  const changeTechnology = (technologyId) => {
    technologiesArr.forEach((tech) => {
      if (tech.id === technologyId) {
        setCurrentTechnology(tech);
      }
    });
  };

  return (
    <div className="technologies-page">
      <h2 className='tech-heading'>
        <span>03</span> Space launch 101
      </h2>
      <div className="technologies">
        <div className="choose-technology-btns">
          <button
            className={
              currentTechnology.id === '0'
                ? 'change-technology-btn active-tech-btn'
                : 'change-technology-btn'
            }
            onClick={() => changeTechnology('0')}
          >
            1
          </button>
          <button
            className={
              currentTechnology.id === '1'
                ? 'change-technology-btn active-tech-btn'
                : 'change-technology-btn'
            }
            onClick={() => changeTechnology('1')}
          >
            2
          </button>
          <button
            className={
              currentTechnology.id === '2'
                ? 'change-technology-btn active-tech-btn'
                : 'change-technology-btn'
            }
            onClick={() => changeTechnology('2')}
          >
            3
          </button>
        </div>
        <Technology {...currentTechnology} />
      </div>
    </div>
  );
}
