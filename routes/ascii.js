var express = require("express");
var router = express.Router();
const generator = require("../modules/asciiGenerator.js");
router.get("/", function (req, res, next) {
  const initObj = req.body;
  return new Promise(function (resolve, reject) {
    resolve(generator.getText());
  });
});
module.exports = router;
