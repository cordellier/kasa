/* LAYOUT */

import React from "react";
import PropTypes from "prop-types";
import "./../css/Layout.css"; 
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="layout-content">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
