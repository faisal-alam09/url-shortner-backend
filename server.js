var config = require('./app/config');

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: config.CorsOption
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hii there, this project is created by faisal.009alam@gmail.com." });
});

require("./app/router/router")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});