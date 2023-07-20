import React, { useEffect, useState } from "react";
// import CropPost from "./croppost";
import "./cropfeed.css";

export default function Cropfeed() {
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
        <h3>Crops Details, Diseases & their Treatment</h3>
        {crops.map((crop) => (
          <div key={crop._id} className="feed">
            <h3>{crop.title}</h3>
            <div className="feed-flex-container">
              <div className="ImageContainer">
                <img className="image" src={crop.img} alt="Crop image"></img>
              </div>

              <div>
                <p>
                  <span>About : </span>
                  {crop.info}
                </p>
                <br></br>

                {crop.price === "" ? (
                  <></>
                ) : (
                  <>
                    <p>
                      <span>Price : </span>
                      {crop.price}
                    </p>
                    <br></br>
                  </>
                )}

                <p>
                  <span>Category : </span>
                  {crop.category}
                </p>
                <br></br>

                {crop.symptoms === "" ? (
                  <> </>
                ) : (
                  <>
                    <p>
                      <span>Disease Symptoms : </span>
                      {crop.symptoms}
                    </p>
                    <br></br>
                  </>
                )}

                {crop.favourableconditions === "" ? (
                  <> </>
                ) : (
                  <>
                    <p>
                      <span>Favourable conditions : </span>
                      {crop.favourableconditions}
                    </p>
                    <br></br>
                  </>
                )}

                {crop.cure === "" ? (
                  <> </>
                ) : (
                  <>
                    <p>
                      <span>Treatment : </span>
                      {crop.cure}
                    </p>
                    <br></br>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
