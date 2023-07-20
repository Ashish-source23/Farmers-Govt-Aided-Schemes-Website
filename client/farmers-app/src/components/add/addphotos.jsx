import React, { useState } from "react";
import "./add.css";

export default function Addphotos() {
  const [image, setImage] = useState();
  const [clicked, setClicked] = useState(false);

  const send = async (event) => {
    setClicked(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("post", image);

    try {
      const response = fetch("http://localhost:8000/api/crop/add/photos", {
        method: "POST",
        headers: {
          authorization: JSON.parse(localStorage.getItem("token")),
        },
        body: formData,
      });
      const result = await response;
      console.log("Success:", result);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="imageContainer">
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
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
              <button className="uploadbtn" type="submit" onClick={send}>
                Upload
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
