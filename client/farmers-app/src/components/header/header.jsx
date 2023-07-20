import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <>
      <div className="navbar-container">
        <div>
          <header>
            <img src="../../images/harvest.png" alt="Icon"></img>
            <h1>Cropopedia</h1>
          </header>
        </div>
        <div className="sidenav">
          <ul className="navbar">
            <li>
              <div className="navbar-element">
                <Link to="/">Home</Link>
              </div>
            </li>
            <li>
              <div className="navbar-element">
                <Link to="crops/">Crops</Link>
              </div>
            </li>
            <li>
              <div className="navbar-element">
                <Link to="scheme/">Schemes</Link>
              </div>
            </li>
            {auth ? (
              <>
                <li>
                  <div className="navbar-element">
                    <Link to="profile/">{JSON.parse(auth).name}</Link>
                  </div>
                </li>
                <li>
                  <div className="navbar-element">
                    <Link onClick={logout} to="/login">
                      Logout
                    </Link>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <div className="navbar-element">
                    <Link to="signup/">Sign Up</Link>
                  </div>
                </li>
                <li>
                  <div className="navbar-element">
                    <Link to="login/">Login</Link>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
