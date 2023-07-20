import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./delete.css";

export default function Deletescheme() {
  const navigate = useNavigate();

  const [sid, setSID] = useState();
  const [isID, setisID] = useState();
  const [checkId, setCheckId] = useState();

  const handleClick = () => {
    setisID(sid);
  };

  const deletePost = async (event) => {
    event.preventDefault();
    let result = fetch("http://localhost:8000/api/scheme/delete", {
      method: "DELETE",
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        s_id: sid,
        check_id: checkId,
      }),
    });
    result = await result.json;
    console.warn(result);
    navigate("/scheme");
  };

  return (
    <div className="delete-container">
      <div className="delete">
        <h1>Attention Website Administrator</h1>

        <h3>
          We feel it is necessary to issue a warning concerning the potential
          deletion of a government scheme post within the farmers' app on your
          website. Deleting such posts can have serious consequences and
          undermine the interests and welfare of the farming community. Please
          carefully consider the following points before taking any deletion
          actions:
        </h3>

        <ol>
          <li>
            <span>Access to Vital Information :</span> Government scheme posts
            serve as a valuable source of information for farmers, providing
            details about agricultural programs, subsidies, grants, and crucial
            updates. Removing these posts may deny farmers access to essential
            information that can significantly impact their livelihoods and
            agricultural practices.
          </li>
          <li>
            <span> Community Trust and Collaboration : </span>The farmers' app
            acts as a platform for community engagement, collaboration, and
            support. By deleting government scheme posts, you risk undermining
            the trust and cooperation within the farming community. It is
            essential to foster an environment that encourages knowledge sharing
            and supports the collective growth of farmers.
          </li>
          <li>
            <span>Legal and Ethical Considerations :</span>
            Deleting government scheme posts may raise legal and ethical
            concerns. As an administrator, it is important to uphold
            transparency and accountability by preserving official information
            shared within the app. Any deletion without valid reasons or proper
            authorization may infringe upon legal obligations and compromise the
            integrity of the platform.
          </li>
        </ol>
        <div className="deleteblock">
          <label htmlFor="delete">
            Enter the ID of the scheme document you want to delete
          </label>
          <br></br>

          <input
            className="inputContainer"
            type="text"
            placeholder="Enter the ID of the post"
            name="scheme_id"
            value={sid}
            onChange={(event) => setSID(event.target.value)}
          ></input>
          <button className="btn" type="submit" onClick={handleClick}>
            Ok
          </button>
        </div>
        {isID ? (
          <>
            <div className="deleteblock popblock">
              <p>
                Before taking any action to delete a government scheme post, we
                strongly urge you to reconsider the potential impact on the
                farming community. Instead, we encourage you to explore
                alternative solutions such as seeking clarification, addressing
                concerns, or engaging in constructive discussions to resolve any
                issues related to the post.
              </p>

              <label htmlFor="deleteblock" className="verify">
                IF YOU STILL WANT TO DELETE THE SCHEME, THEN PROIVIDE THE ID OF
                THE POST
              </label>
              <br></br>

              <input
                className="inputContainer"
                type="text"
                placeholder={"Enter the ID of the post to verify"}
                name="verify"
                value={checkId}
                onChange={(event) => setCheckId(event.target.value)}
              ></input>
              <button className="btn" type="submit" onClick={deletePost}>
                Delete
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
