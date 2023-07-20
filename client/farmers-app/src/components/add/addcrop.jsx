import React, { useState } from "react";
import { useNavigate } from "react-router";
import Addphotos from "./addphotos";
import "./add.css";

export default function Addcrop() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [favourableconditions, setFavourableconditions] = useState("");
  const [cure, setCure] = useState("");
  const [img, setImg] = useState("");

  // const [getimage, setGetImage] = useState("");
  const [clicked, setClicked] = useState(false);

  const send = async (event) => {
    setClicked(true);
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("post", image);
    // setGetImage(formData);
    // // console.warn(formData);
    // console.warn(getimage);
  };

  const handleCrop = async (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/api/crop/add", {
      method: "POST",
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        title: title,
        category: category,
        info: info,
        price: price,
        symptoms: symptoms,
        favourableconditions: favourableconditions,
        cure: cure,
        img: img,
      }),
    });
    navigate("/crops");
  };

  return (
    <div className="crop-container newContainer">
      <h3>Add new crop details here</h3>
      <div className="crop flexcontainer">
        <div className="formContainer">
          <label htmlFor="title">Enter the title of the document</label>
          <br></br>
          <textarea
            rows={6}
            className="add"
            type="text"
            placeholder="Crop Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <br></br>

          <label htmlFor="category">Enter the category of the document</label>
          <br></br>
          <textarea
            rows={6}
            cols={20}
            className="add"
            type="text"
            placeholder="Crop category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></textarea>
          <br></br>

          <label htmlFor="info">
            Enter the information regarding the document
          </label>
          <br></br>
          <textarea
            rows={6}
            className="add"
            type="text"
            placeholder="Crop info"
            name="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
          <br></br>

          <label htmlFor="price">Market price</label>
          <br></br>
          <textarea
            rows={6}
            className="add"
            type="text"
            placeholder="Crop price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></textarea>
          <br></br>

          <label htmlFor="symptoms">Disease symptoms </label>
          <br></br>
          <textarea
            rows={6}
            className="add"
            type="text"
            placeholder="Disease symptoms"
            name="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
          <br></br>

          <label htmlFor="favourable conditions">Favourable conditions</label>
          <br></br>
          <textarea
            rows={6}
            className="add"
            type="text"
            placeholder="Favourable conditions"
            name="favourableconditions"
            value={favourableconditions}
            onChange={(e) => setFavourableconditions(e.target.value)}
          ></textarea>
          <br></br>

          <label htmlFor="cure">Cure this by:</label>
          <br></br>
          <textarea
            rows={6}
            className="add"
            type="text"
            placeholder="How to cure"
            name="cure"
            value={cure}
            onChange={(e) => setCure(e.target.value)}
          ></textarea>
          <br></br>

          <label htmlFor="image">Provide Image Address</label>
          <br></br>
          <textarea
            rows={6}
            className="add"
            type="text"
            placeholder="Provide Image Address"
            name="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          ></textarea>
          <br></br>
        </div>

        <div>
          <h3>Upload the photos related to this post</h3>
          {clicked ? (
            <>
              <p> File Uploaded</p>
            </>
          ) : (
            <>
              <form>
                <input
                  className="fileContainer"
                  id="file"
                  type="file"
                  accept=".jpg"
                  // onChange={(e) => setImage(e.target.files[0])}
                ></input>
                <button className="uploadbtn" type="submit" onClick={send}>
                  Upload
                </button>
              </form>
            </>
          )}
          {/* <Addphotos /> */}
        </div>
      </div>
      <button className="appbutton" type="submit" onClick={handleCrop}>
        Add
      </button>
    </div>
  );
}
