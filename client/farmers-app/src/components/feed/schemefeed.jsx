import React, { useState, useEffect } from "react";
import "./scheme.css";

export default function Schemefeed() {
  const [schemes, setScheme] = useState([]);

  useEffect(() => {
    getScheme();
  }, []);

  const getScheme = async () => {
    let result = await fetch("http://localhost:8000/api/scheme/");
    result = await result.json();
    setScheme(result);
  };

  // console.warn(schemes);

  return (
    <>
      <div className="scheme-container">
        <h3>Ongoing Schemes</h3>
        {schemes.map((scheme) => (
          <div key={scheme._id} className="scheme">
            <h3>
              {/* <span> Scheme Name : </span> */}
              {scheme.title}
            </h3>
            {/* <br></br> */}

            <p>
              <span>About : </span>
              {scheme.about.slice(0, 250) + "...."}
            </p>

            {scheme.duration === "" ? (
              <></>
            ) : (
              <p>
                <br></br>
                <span>Duration : </span>
                {scheme.duration.slice(0, 250) + "...."}
              </p>
            )}

            <br></br>
            <p>
              <span>Benefits : </span>
              {scheme.benefits.slice(0, 250) + "...."}
            </p>

            {scheme.eligibility === "" ? (
              <></>
            ) : (
              <p>
                <br></br>
                <span>Eligibility : </span>
                {scheme.eligibility.slice(0, 250) + "...."}
              </p>
            )}

            {scheme.website === "" ? (
              <></>
            ) : (
              <>
                <br></br>
                <p>
                  <span>Website : </span>
                  {scheme.website.slice(0, 250) + "...."}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
