/* LOGEMENTSCARD */

import './../css/LogementsCard.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const LogementsCard = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/logements/${id}`);
  };

  return (
    <button
      className="logements-card"
      data-id={id}
      onClick={handleCardClick}
    >
      <div className="card-cover">
        <img src={cover} alt={title} />
        <div className="card-content">
          {title}
        </div>
      </div>
    </button>
  );
};

LogementsCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default LogementsCard;
