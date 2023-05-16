import React, { useState, useEffect } from "react";
import "./scheme.css";

export default function Scheme() {
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
        {schemes.map((scheme) => (
          <div key={scheme._id} className="scheme">
            <h3>
              <span>Title : </span>
              {scheme.about}
            </h3>
            <p>
              <span>Apply here : </span>
              {scheme.wheretoapply}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
