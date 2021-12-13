const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index.html");
});

router.get("/stats", (req, res) => {
  res.render("stats.html");
});

router.get("/exercise", (req, res) => {
  res.render("exercise.html");
});

module.exports = router;
