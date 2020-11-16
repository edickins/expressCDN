var express = require("express");
var router = express.Router();
const generator = require("../modules/markovTextGenerator.js");
router.get("/", function (req, res, next) {
  generator.getText().then((txt) => {
    console.log("sending response : " + txt);
    res.render("index", { txt: txt });
  });
});
module.exports = router;
