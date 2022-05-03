const express = require("express");
const User = require("../Models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username) return res.status(400).send("Username is required");
  if (!password) return res.status(400).send("Password is required");

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("Username dosen't exsist in DB");

  const isMatch = await user.checkPassword(password);
  if (!isMatch) return res.status(400).send("Password incorrect");

  return res.send(user.genAuthToken());
});

module.exports = router;
