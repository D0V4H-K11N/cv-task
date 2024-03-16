import "./App.css";
import React from "react";
import FloatingButton from "./components/PDFButton/FloatingButton";
import "./components/PDFButton/FloatingButton.css";
import GridContainer from "./components/GridContainer/GridContainer";

function App() {
  const gridItemsData = [
    {
      imageUrl: "/Bocconi.jpg",
      text: "Currently studying in Bocconi University in Milano in the Bachelor for Economics, Management and Computer Science degree as Class of 2026",
    },
    {
      imageUrl: "/TurgutOzal.jpg",
      text: "Graduated Turgut Ozal Durres with a 10.0/10.0 after attending secondary and high school there.",
    },
    {
      imageUrl: "/Vodafone.jpg",
      text: "Successfully completed a week-long course regarding HTML and CSS in the Vodafone Albania offices in 2018. I was also offered an internship in a few AI projects which will happen this summer.",
    },
    {
      imageUrl: "/Lego.jpg",
      text: "Won 1st Place after two weeks of programming a robot comprised of Motor parts, an Arduino and Legos that was able to complete challenges in record time.",
    },
    {
      imageUrl: "/Roblox.jpg",
      text: "Creator of many Roblox experiences and games, proficient in Lua used in programming, Blender for 3D Models and game development in Roblox.",
    },
    {
      imageUrl: "/Klubi.jpg",
      text: "Volunteer for a humanitarian non-profit organisation 'Klubi Shpresa' for the last 3 years.",
    },
  ];

  return (
    <div>
      <GridContainer gridItemsData={gridItemsData} />
      <FloatingButton />
    </div>
  );
}

export default App;
