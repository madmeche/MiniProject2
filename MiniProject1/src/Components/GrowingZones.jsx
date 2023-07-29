import React, { useState, useEffect } from "react";
import { fetch } from "react-fetch";


const GrowingZones = () => {

  return (
    <>
    <img src= 'https://www.americanmeadows.com/media/wysiwyg/usda-zones.jpg'/>
    </>
  
  // const [growingZones, setGrowingZones] = useState([]);
  // useEffect(() => {
  //   fetch("https://www.trees.com/growing-zones")
  //     .then((response) => response.json())
  //     .then((data) => setGrowingZones(data));
  // }, []);
  // return (
  //   <div>
  //     <ul>
  //       {growingZones.map((growingZone) => (
  //         <li key={growingZone.id}>{growingZone.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  );
};
export default GrowingZones;
