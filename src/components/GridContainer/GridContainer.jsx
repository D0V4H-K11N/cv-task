// GridContainer.jsx
import './GridContainer.css'; // Import your CSS file
import GridItem from '../GridItem/GridItem';

const GridContainer = ({ gridItemsData }) => {
 

  return (
    <div className="grid-container">
        {gridItemsData.map((item, index) => (
            <GridItem key={index} imageUrl={item.imageUrl} text={item.text} />
        ))}
    </div>
  );
};

export default GridContainer;
