const express = require("express");
const app = express();

app.listen(5000, (req, res) => {
  res.send("server is running on port 5000");
});
