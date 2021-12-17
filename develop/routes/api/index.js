const router = require("express").Router();
const workoutRoutes = require("./apiRoutes.js");

router.use("/workouts", workoutRoutes);

module.exports = router;
