/* ERRORPAGE */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Erreur from "../components/Error";
import Layout from "../components/Layout";

const ErrorPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Erreur />
      </Layout>
      <Footer />
    </>
  );
};

export default ErrorPage;
