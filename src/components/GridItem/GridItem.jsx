// GridItem.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const GridItem = ({ imageUrl, initialText, index }) => {
  const storageKey = `gridItemText_${index}`;

  // Initialize text state with the initial text or retrieve from localStorage
  const [text, setText] = useState(() => {
    const savedText = localStorage.getItem(storageKey);
    return savedText !== null ? savedText : initialText;
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTextBlur = () => {
    setIsEditing(false);
    localStorage.setItem(storageKey, text); // Save text to localStorage on blur
  };

  return (
    <div className="grid-item">
      <img src={imageUrl} alt="Image" />
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          autoFocus
        />
      ) : (
        <p onClick={handleTextClick}>{text}</p>
      )}
    </div>
  );
};

GridItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  initialText: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default GridItem;
