import { useState } from 'react';
import data from '../data.json';
import CrewMember from './CrewMember';
import '../styles/crew.scss';

export default function Crew() {
  const crewArr = data.crew;

  const [currentMember, setCurrentMember] = useState(crewArr[0]);

  const changeCrewMember = (memberId) => {
    crewArr.forEach((member) => {
      if (member.id === memberId) {
        setCurrentMember(member);
      }
    });
  };

  return (
    <div className="crew-page">
      <h2>
        <span>02</span> Meet your crew
      </h2>
      <div className="crew">
        <CrewMember {...currentMember} />

        <div className="change-crew-member-btns">
          <span
            className={currentMember.id === '0' ? 'dot active-dot' : 'dot'}
            onClick={() => changeCrewMember('0')}
          >
            &bull;
          </span>
          <span
            className={currentMember.id === '1' ? 'dot active-dot' : 'dot'}
            onClick={() => changeCrewMember('1')}
          >
            &bull;
          </span>
          <span
            className={currentMember.id === '2' ? 'dot active-dot' : 'dot'}
            onClick={() => changeCrewMember('2')}
          >
            &bull;
          </span>
          <span
            className={currentMember.id === '3' ? 'dot active-dot' : 'dot'}
            onClick={() => changeCrewMember('3')}
          >
            &bull;
          </span>
        </div>
      </div>
    </div>
  );
}
