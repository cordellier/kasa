/* TAG */

import React from 'react';
import PropTypes from 'prop-types';
import './../css/Tags.css';

const Tags = ({ tags }) => {
    return (
        <ul className="logement-tags-list">
            {tags.map(tag => (
                <li key={tag} className="logement-tags">{tag}</li>
            ))}
        </ul>
    );
};

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tags;

