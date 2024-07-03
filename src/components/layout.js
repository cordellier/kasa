import React from "react";
import "./../css/layout.css"; // Import the CSS file for layout styling

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
