import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import backgroundImage from "./../images/banner1.png";
import LogementsMenu from "./../components/LogementsMenu";

const HomePage = () => {
  return (
    <Layout>
      <Banner
        backgroundImage={backgroundImage}
        title="Chez vous, partout et ailleurs"
        classStyle="banner1"
      />
      <LogementsMenu />
    </Layout>
  );
};

export default HomePage;
