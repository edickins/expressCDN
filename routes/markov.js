var express = require("express");
var router = express.Router();
const generator = require("../modules/markovTextGenerator.js");
console.log("index.js");
router.get("/", function (req, res, next) {
  const initObj = req.body;
  generator.getText(initObj).then((txt) => {
    console.log("sending response : " + txt);
    res.render("index", { txt: txt });
  });
});
module.exports = router;
