import React, { useState, useEffect } from 'react';
import Slideshow from './Slideshow';
import logementsData from '../data/logements.json';
import { useParams, useNavigate } from 'react-router-dom';
import LogementsDetails from './LogementsDetails';
import ErrorPage from './Error';

const LogementsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const selectedLogement = logementsData.find(logement => logement.id === id);
    if (!selectedLogement) {
      navigate('/404');
    } else {
      setLogement(selectedLogement);
    }
  }, [id, navigate]);

  
  if (!logement) {
    return <ErrorPage />;
  }


  const { pictures } = logement;

  return (
    <div>
      <Slideshow images={pictures} />
      <LogementsDetails logement={logement} />
    </div>
  );
};

export default LogementsPage;
