import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import { Banner1 } from "./../components/banner";
import Layout from "./../components/layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Banner1 />
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
