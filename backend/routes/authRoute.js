const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/registr", async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: "User already exist" });
    }
    const user = new User({ email, password });

    await user.save();
    const token = jwt.sign(
      {
        userId: user.id,
      },
      "vapoltavecs",
      { expiresIn: "1h" }
    );
    res
      .status(201)
      .json({
        message: "Пользователь создан",
        token: token,
        isMatch: true,
        userId: user.id,
      });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }
    if (password !== user.password) {
      return res.status(400).json({ message: "Пароли не совпадают" });
    }
    const token = jwt.sign(
      {
        userId: user.id,
      },
      "vapoltavecs",
      { expiresIn: "1h" }
    );

    res.json({ token: token, userId: user.id, isMatch: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
module.exports = router;
