import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import backgroundImage from "./../images/banner2.png";

const AboutPage = () => {
  return (
    <Layout>
      <Banner backgroundImage={backgroundImage} classStyle="banner2" />
    </Layout>
  );
};

export default AboutPage;
