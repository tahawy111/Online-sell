const express = require("express");
const User = require("../Models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ username });
  if (user) return res.status(400).send("Username already taken");

  user = new User({ username, password });

  await user.save();
  return res.send({
    user,
    "x-auth-token": user.genAuthToken(),
  });
});

module.exports = router;
