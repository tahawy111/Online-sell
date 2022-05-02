const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 1, max: 25 },
  password: { type: String, required: true, min: 5, max: 300 },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);

  const hashed = await bcrypt.hash(this.password, salt);

  this.password = hashed;

  next();
});

userSchema.methods.genAuthToken = function () {
  return jwt.sign(this.toJSON(), "ThePassword");
};

module.exports = User = mongoose.model("User", userSchema);
