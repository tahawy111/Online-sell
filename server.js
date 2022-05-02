const express = require("express");
const app = express();
const mongoose = require("mongoose");

// middlewares
app.use(require("cors")());
app.use(express.json());

// routes
require("./routes")(app);

const port = 5000;

// DB
mongoose
  .connect(
    "mongodb+srv://admin:admin123456@cluster0.p5ohv.mongodb.net/online-sell?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("http://localhost:" + port));
