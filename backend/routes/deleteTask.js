const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../models/Task");

router.post("/delete", async (req, res) => {
  try {
    const task = await Task.findById(req.body.taskId);

    if (task) {
      await Task.deleteOne({ _id: task.id }, (err) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ message: "задача успешно удалена", ok: true });
        }
      });
    } else {
      res.status(500).json({ message: "что то пошло не так" });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
