const path = require("path");
const express = require("express");

module.exports = async (app) => {
  await app.use(express.static(path.join(__dirname, "../../assets")));
  await app.use(express.static(path.join(__dirname, "../../public")));
};


