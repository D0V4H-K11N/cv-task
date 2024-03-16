// GridItem.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const GridItem = ({ imageUrl, text }) => {
  return (
    <div className="grid-item">
      <img src={imageUrl} alt={`Image`} />
      <p>{text}</p>
    </div>
  );
};

GridItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default GridItem;