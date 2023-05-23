const express = require("express");
const dotenv = require("dotenv");
const hbs = require("express-handlebars");
const path = require("path");
const sequelize = require("./config/connection");

const app = express();
app.use(express.urlencoded({ extended: false }));

app.engine(
  "hbs",
  hbs.create({
    extname: "hbs",
    defaultLayout: "main",
  }).engine
);

app.set("view engine", "hbs");

// routes
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 4000;
sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, console.log(`Server running in mode in ${PORT}`));
  })
  .catch((error) => {
    console.error("Error syncing tables:", error);
  });
