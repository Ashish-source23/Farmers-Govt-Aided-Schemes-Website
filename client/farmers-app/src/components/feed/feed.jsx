import React, { useEffect, useState } from "react";
import "./feed.css";

export default function Feed() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    getCrop();
  }, []);

  const getCrop = async () => {
    let result = await fetch("http://localhost:8000/api/crop/");
    result = await result.json();
    setCrops(result);
  };

  // console.warn(crops);

  return (
    <>
      <div className="feed-container">
        {crops.map((crop) => (
          <div key={crop._id} className="feed">
            <h3>
              <span>Title : </span>
              {crop.title}
            </h3>
            <p>
              <span>Price : </span>
              {crop.price}
            </p>
            <p>
              <span>About : </span>
              {crop.info}
            </p>
            <p>
              <span>Category : </span>
              {crop.category}
            </p>
            <p>
              <span>Pesticides : </span>
              {crop.pesticides}
            </p>
            <p>
              <span>Insecticides : </span>
              {crop.insecticides}
            </p>
            <p>
              <span>Fertilizers : </span>
              {crop.fertilizers}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
