import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import backgroundImage from "./../images/banner1.png";
import "./../css/LogementsMenu.css";
import LogementsCard from "./../components/LogementsCard";
import logementsData from "../data/logements.json";

const HomePage = () => {
  return (
    <Layout>
      <Banner
        backgroundImage={backgroundImage}
        title="Chez vous, partout et ailleurs"
        classStyle="banner1"
      />
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
    </Layout>
  );
};

export default HomePage;
