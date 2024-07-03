import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import Error from "./../components/error";
import Layout from "./../components/layout";

const ErrorPage = () => {
  return (
    <>
      <layout>
        <Header />
        <Error />
      </layout>
      <Footer />
    </>
  );
};

export default ErrorPage;
