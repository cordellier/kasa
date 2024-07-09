// Layout.jsx
import React from "react";
import PropTypes from "prop-types";
import "./../css/Layout.css"; 
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
