import React from "react";
import PropTypes from 'prop-types';
import "./../css/Banner.css";

const Banner = ({ backgroundImage, title, classStyle }) => {
  const titleArray = title?.split(',');

  return (
    <div className={`banner ${classStyle}`}>
      <img
        src={backgroundImage}
        alt="Banner"
        className="banner-image"
      />
      {title && (
        <div className="banner-text">
          {titleArray[0]},{" "}
          <span className="text-mobile-split">{titleArray[1]}</span>
        </div>
      )}
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classStyle: PropTypes.string,
};

Banner.defaultProps = {
  classStyle: '',
};

export default Banner;
