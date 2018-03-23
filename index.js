"use strict";

// Express module configurations
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const app = express();
const port = 8080;
app.use(express.static("public"));

app.engine("html", es6Renderer);
app.set("views", "html");
app.set("view engine", "html");
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// Body-parser module configurations
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedParser);

// Sqlite3 module configurations

const sqlite3 = require("sqlite3").verbose();

const DBName = "hashtags";

// SQL Database connection

const db = new sqlite3.Database(`./${DBName}.db`, err => {
  if (err) return console.error(err.message);
  console.log(`Connected to the "${DBName}" SQlite database.`);
});

// Page configurations
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/getstarted", (req, res) => {
  res.render("getstarted");
});

app.post("/generated", urlencodedParser, (req, res) => {
  const mainCategories = req.body.mainCategories;
  const subCategories = req.body.subCategories;
  const sqlSelect = `SELECT ${subCategories} FROM ${mainCategories} ORDER BY RANDOM() LIMIT 30`;
  db.all(sqlSelect, (err, generatedText) => {
    let list = []
    generatedText.forEach((row) => {
      list.push(row[`${subCategories}`]);
    });
    let hashtags = String(list)
    hashtags = hashtags.replace(/,/g, '\n');
    const data = {
      hashtags: hashtags
    }
    res.render("generated", { locals: data });
  });
});
