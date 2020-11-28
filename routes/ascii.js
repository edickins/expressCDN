var express = require("express");
var router = express.Router();
const generator = require("../modules/asciiGenerator.js");
router.get("/", function (req, res, next) {
  const initObj = req.body;
  // return a Promise
  res.json(generator.getText(initObj));
});
module.exports = router;
