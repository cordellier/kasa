import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogementsPage from "./../components/LogementsPage";
import Layout from "../components/Layout";

const LogementPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <LogementsPage />
      </Layout>
      <Footer />
    </>
  );
};

export default LogementPage;
