import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";

export default function Login() {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    let result = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        mobileNo: mobileNo,
        password: password,
      }),
    });
    result = await result.json();
    // console.warn(result);
    if (result.token) {
      localStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("token", JSON.stringify(result.token));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login">
          <h3>Login</h3>
          <label htmlFor="MobileNo">Enter your mobile number :</label>
          <br></br>
          <input
            type="tel"
            className="inputContainer"
            placeholder="Enter mobile number"
            required
            name="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <br></br>
          <label htmlFor="password">Enter your password :</label>
          <br></br>
          <input
            type="password"
            className="inputContainer"
            placeholder="Enter password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button className="appbutton" type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
