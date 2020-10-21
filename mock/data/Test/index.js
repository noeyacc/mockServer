const express = require("express");
const router = express.Router();
const { sleep } = require("../../utils")


router.get("/rockets", async (req, res) => {
  const status = req.query.mock ? req.query.mock : 200;
  await sleep(1500);
  let resData = require("./json/test.json");
  res.status(status).json(resData[status]);
});

module.exports = router;