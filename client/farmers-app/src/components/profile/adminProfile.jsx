import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdminProfile() {
  const [users, setUser] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let result = await fetch("http://localhost:8000/api/auth/users");
    result = await result.json();
    setUser(result);
  };

  return (
    <>
      <div className="adminProfile">
        <div className="users box">
          <h3>Manage Users</h3>
          <div className="block">
            <p>
              <span>Users : {users.length - 1} </span>
            </p>
          </div>
        </div>

        <div className="crops box">
          <h3>Manage Crops</h3>
          <div className="block-container">
            {/* ADD a crop  */}

            <Link to="/addcrops">
              <div className="block">
                <p> Add a new crop</p>
                <AddCircleOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
              </div>
            </Link>

            {/* EDIT a crop  */}

            <Link to="/editcrop">
              <div className="block">
                <p>Edit a crop </p>
                <EditNoteOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
              </div>
            </Link>
          </div>
        </div>

        <div className="schemes box">
          <h3>Manage Schemes</h3>
          <div className="block-container">
            {/* ADD a scheme  */}

            <Link to="/addscheme">
              <div className="block">
                <p>Add a new scheme</p>
                <AddCircleOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
              </div>
            </Link>

            {/* EDIT a scheme  */}

            <Link to="/addscheme">
              <div className="block">
                <p>Edit a scheme</p>
                <EditNoteOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
              </div>
            </Link>

            {/* DELETE a scheme  */}

            <Link to="/deletescheme">
              <div className="block">
                <p>Delete a scheme</p>
                <DeleteIcon sx={{ fontSize: 40 }} className="icon" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
