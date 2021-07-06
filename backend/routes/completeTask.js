const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { id } = req.body;
    const task = await Task.findOne({ _id: id });
    if (task) {
      const updateRes = await Task.updateOne(
        { _id: id },
        { $set: { isComplete: true } }
      );
      if (updateRes) {
        res.status(201).json({ message: "Выполнено" });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
