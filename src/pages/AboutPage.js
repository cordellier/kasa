/* ABOUTPAGE */

import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import backgroundImage from "./../images/banner2.png";
import About from "../components/About";

const AboutPage = () => {
  return (
    <Layout>
      <>
        <Banner backgroundImage={backgroundImage} classStyle="banner2" />
        <About />
      </>
    </Layout>
  );
};

export default AboutPage;
