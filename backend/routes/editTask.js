const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.body.taskId });
    if (task) {
      const result = await Task.updateOne(
        { _id: req.body.taskId },
        { $set: { description: req.body.description } }
      );
      if (result) {
        res.status(200).json({ message: "Успешно отредактированно" });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
