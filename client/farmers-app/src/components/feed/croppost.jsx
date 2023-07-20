import React from "react";

export default function CropPost(props) {
  return (
    <>
      <div className="feed">
        <h3>{props.crop.title}</h3>
        <div>{/* Image */}</div>
        <div>
          <p>
            <span>About : </span>
            {props.crop.info}
          </p>
          {props.crop.price === "" ? (
            <></>
          ) : (
            <>
              <p>
                <span>Price : </span>
                {props.crop.price}
              </p>
            </>
          )}

          <p>
            <span>Category : </span>
            {props.crop.category}
          </p>

          {props.crop.symptoms === "" ? (
            <> </>
          ) : (
            <>
              <p>
                <span>Disease Symptoms : </span>
                {props.crop.symptoms}
              </p>
            </>
          )}

          {props.crop.favourableconditions === "" ? (
            <> </>
          ) : (
            <>
              <p>
                <span>Favourable conditions : </span>
                {props.crop.favourableconditions}
              </p>
            </>
          )}

          {props.crop.cure === "" ? (
            <> </>
          ) : (
            <>
              <p>
                <span>Treatment : </span>
                {props.crop.cure}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
