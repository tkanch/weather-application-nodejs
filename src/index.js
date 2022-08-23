const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//for static files like styles,images
app.use(express.static(staticPath));

//for setting view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

//routing
app.get("/", (req, res) => {
  res.render("index");
});

//for 404 page
app.get("/weather", (req, res) => {
  res.render("weather");
});
//for 404 page
app.get("*", (req, res) => {
  res.render("404error");
});
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
