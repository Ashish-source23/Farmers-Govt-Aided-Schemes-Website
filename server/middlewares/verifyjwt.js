const express = require("express");
const jsonwt = require("jsonwebtoken");
const key = require("../setup/myurl").secret;
const app = express();

const verifyJwt = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    // console.log(token);
    jsonwt.verify(token, key, (err, valid) => {
      if (err) {
        res.status(401).json("Please provide a valid token");
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({ fail: "Please provide a token" });
  }
};

module.exports = verifyJwt;
