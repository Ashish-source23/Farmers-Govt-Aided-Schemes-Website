import React, { useState } from "react";
import "./add.css";
import { useNavigate } from "react-router";

export default function Addscheme() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  const [duration, setDuration] = useState("");
  const [benefits, setBenefits] = useState("");
  const [eligibility, setEligibility] = useState("");

  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    let result = fetch("http://localhost:8000/api/scheme/add", {
      method: "POST",
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        title: title,
        about: about,
        website: website,
        duration: duration,
        benefits: benefits,
        eligibility: eligibility,
      }),
    });
    // result = await result.json();
    // console.warn(result);
    navigate("/scheme");
  };

  return (
    <>
      <div className="crop-container">
        <div className="crop">
          <h3>Add new scheme details here</h3>
          <label htmlFor="title">Enter the title of the scheme</label>
          <br></br>
          <textarea
            // cols={100}
            rows={10}
            className="inputContainer add"
            type="text"
            placeholder="Crop Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <br></br>

          <label htmlFor="disc">Enter the description of the scheme</label>
          <br></br>
          <textarea
            rows={10}
            className="inputContainer add"
            type="textarea"
            placeholder="Enter the description of the scheme"
            name="disc"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>

          <label htmlFor="duration">
            Enter the duration of the scheme from where to apply
          </label>
          <br></br>
          <textarea
            rows={10}
            className="inputContainer add"
            type="textarea"
            placeholder="Enter the duration of the scheme from where to apply"
            name="website"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          ></textarea>

          <label htmlFor="benefits">
            Enter the benefits of the scheme from where to apply
          </label>
          <br></br>
          <textarea
            rows={10}
            className="inputContainer add"
            type="textarea"
            placeholder="Enter the benefits of the scheme from where to apply"
            name="website"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
          ></textarea>

          <label htmlFor="eligibility">
            Enter the eligibility of the scheme from where to apply
          </label>
          <br></br>
          <textarea
            rows={10}
            className="inputContainer add"
            type="textarea"
            placeholder="Enter the eligibility of the scheme from where to apply"
            name="website"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
          ></textarea>

          <label htmlFor="website">
            Enter the website of the scheme from where to apply
          </label>
          <br></br>
          <textarea
            rows={10}
            className="inputContainer add"
            type="textarea"
            placeholder="Enter the website of the scheme from where to apply"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          ></textarea>

          <button className="appbutton" type="submit" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
