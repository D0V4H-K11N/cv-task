// GridContainer.jsx
import React from 'react';
import './GridContainer.css';
import GridItem from '../GridItem/GridItem';

const GridContainer = ({ gridItemsData }) => {
  return (
    <div className="grid-container">
      {gridItemsData.map((item, index) => (
        <GridItem
          key={index}
          imageUrl={item.imageUrl}
          initialText={item.text}
          index={index} // Pass the index prop to each GridItem
        />
      ))}
    </div>
  );
};

export default GridContainer;
