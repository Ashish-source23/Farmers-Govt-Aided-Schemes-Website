import React, { useEffect, useState } from "react";
import AdminProfile from "./adminProfile";
import { BrowserRouter, Routes } from "react-router";

export default function Profile() {
  const [profile, setProfile] = useState("");

  const adminCheck = profile.isAdmin;

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    let result = await fetch("http://localhost:8000/api/auth/profile", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setProfile(result);
    console.warn(result);
  };

  return (
    <>
      {adminCheck ? (
        <AdminProfile />
      ) : (
        <>
          <div className="profile-container">
            <div className="profile">
              <h3>
                <span>Name: </span>
                {profile.name}
              </h3>
              <h3>
                <span>Mobile No:</span> {profile.mobileNo}
              </h3>
            </div>
          </div>
        </>
      )}
    </>
  );
}
