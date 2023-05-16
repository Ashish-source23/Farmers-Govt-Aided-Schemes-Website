import React from "react";

export default function Addcrop() {
  return (
    <div>
      <div>
        <h3>Add new crop details here</h3>
        <label htmlFor="title">Enter the title of the document</label>
        <br></br>
        <input type="text" placeholder="Crop Title" name="title"></input>
        <br></br>

        <label htmlFor="category">Enter the category of the document</label>
        <br></br>
        <input type="text" placeholder="Crop category" name="category"></input>
        <br></br>

        <label htmlFor="info">
          Enter the information regarding the document
        </label>
        <br></br>
        <input type="text" placeholder="Crop info" name="info"></input>
        <br></br>

        <label htmlFor="price">Market price</label>
        <br></br>
        <input type="text" placeholder="Crop price" name="price"></input>
        <br></br>

        <label htmlFor="pesticides">Pesticides recommended </label>
        <br></br>
        <input
          type="text"
          placeholder="Crop pesticides"
          name="pesticides"
        ></input>
        <br></br>

        <label htmlFor="fertilizers">Fertilizers recommended</label>
        <br></br>
        <input
          type="text"
          placeholder="Crop fertilizers"
          name="fertilizers"
        ></input>
        <br></br>

        <label htmlFor="insecticides">Insecticides recommended</label>
        <br></br>
        <input
          type="text"
          placeholder="Crop insecticides"
          name="insecticides"
        ></input>
      </div>
    </div>
  );
}
