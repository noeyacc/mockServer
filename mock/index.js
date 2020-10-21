const express = require("express");
const app = express();
const { cors } = require("./utils")

const Test = require("./data/Test");

app.use(express.json())
  .use("/*", cors)
  .use(Test);

module.exports = app;