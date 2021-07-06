const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middlevars/auth.middleware");
router.get("/tasks", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user.userId });

    if (!tasks) {
      return res.status(401).json({ message: "Пользователь не авторизован" });
    }
    res.status(200).json({ message: "Ссылки успешно получены!!", data: tasks });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
