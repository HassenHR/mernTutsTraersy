const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`running on port ${port} `);
});
