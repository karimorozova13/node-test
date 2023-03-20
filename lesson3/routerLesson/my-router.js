const express = require("express");
const router = express.Router();

// home page

router.get("/", (req, res) => {
  res.send("Main route");
});
router.get("/about", (req, res) => {
  res.send("About ");
});

module.exports = router;
