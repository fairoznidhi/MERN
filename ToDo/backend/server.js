require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

// Parse requests
app.use(bodyParser.json());

connectDB();

// routes
app.use("/api/tasks", require("./routes/api/tasks"));

app.get("/", (req, res) => {
  res.json({ message: "Wecome to our ToDo app!" });
});


const port = 5000;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
