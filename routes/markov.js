var express = require("express");
var router = express.Router();
const generator = require("../modules/markovTextGenerator.js");
router.get("/", function (req, res, next) {
  const initObj = req.body;
  generator.getText(initObj).then((txt) => {
    //console.log("sending response : " + txt);
    res.json(txt);
  });
});
module.exports = router;
