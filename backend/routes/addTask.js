const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middlevars/auth.middleware.js");
router.post("/create", auth, async (req, res) => {
  try {
    const { title, description, Date, planed } = await req.body;

    const task = new Task({
      title,
      description,
      Date,
      planed,
      owner: req.user.userId,
      isComplete: false,
    });

    await task.save();
    res.status(200).json({ message: "Задача создана" });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
