import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./signup.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleClick = async () => {
    let result = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        mobileNo: mobileNo,
        password: password,
        name: name,
      }),
    });
    result = await result.json();
    console.warn(result);
    navigate("/profile");
    localStorage.setItem("user", JSON.stringify(result));
    localStorage.setItem("token", JSON.stringify(result.auth));
  };

  return (
    <>
      <div className="register-container">
        <div className="register">
          <h3>Haven't connected yet ?? </h3>
          <h3>Register Here</h3>
          <label htmlFor="name">Enter your name :</label>
          <br></br>
          <input
            className="inputContainer"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>

          <br></br>

          <label htmlFor="mobileNo">Enter your mobile number :</label>

          <br></br>

          <input
            className="inputContainer"
            type="text"
            placeholder="Enter your mobile number"
            name="mobileNo"
            minLength={10}
            required
            onChange={(e) => setMobileNo(e.target.value)}
            value={mobileNo}
          ></input>

          <br></br>

          <label htmlFor="password">Enter your password :</label>

          <br></br>

          <input
            className="inputContainer"
            type="password"
            placeholder="Enter your password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            minLength="8"
          ></input>

          <br></br>

          <button className="appbutton" type="button" onClick={handleClick}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}
