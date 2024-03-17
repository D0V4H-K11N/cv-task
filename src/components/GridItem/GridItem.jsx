// GridItem.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const GridItem = ({ imageUrl, initialText, index }) => {
  const storageKey = `gridItemText_${index}`;
  const [rotation, setRotation] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const angleX = (rect.height / 2 - y) / 10; // Adjust the divisor for sensitivity
    const angleY = (x - rect.width / 2) / 10; // Adjust the divisor for sensitivity
    const popupFactor = 1.15; // The factor by which the item is scaled up on hover
    const scale = popupFactor - 1; // The scale difference from the default size
    const scaleFactorX = popupFactor + scale * (1 - y / rect.height);
    const scaleFactorY = popupFactor + scale * (1 - x / rect.width);
    setRotation(
      `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scaleFactorX}, ${scaleFactorY})`
    );
  };

  const handleMouseLeave = () => {
    setRotation("rotateX(0deg) rotateY(0deg)");
  };

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
    <div
      className="grid-item"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: rotation }}
    >
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
