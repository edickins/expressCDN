var express = require("express");
var router = express.Router();
const generator = require("../modules/markovTextGenerator.js");
console.log("index.js");
router.get("/", function (req, res, next) {
  generator.getText().then((txt) => {
    console.log("sending response : " + txt);
    res.render("index", { txt: txt });
  });
});
router.get("/rawText", function (req, res, next) {
  generator.getText().then((txt) => {
    console.log("sending response : " + txt);
    res.send({ txt: txt });
  });
});
module.exports = router;
