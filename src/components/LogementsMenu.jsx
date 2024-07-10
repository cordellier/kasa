import React from 'react'
import './../css/LogementsMenu.css';
import LogementsCard from './LogementsCard';
import logementsData from '../data/logements.json';

const LogementsMenu = () => {
  return (
    <div className="logements-menu">
      <div className="grid-container">
        {logementsData.map((logement) => (
          <LogementsCard
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default LogementsMenu;