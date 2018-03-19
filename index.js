"use strict";

const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const app = express();
app.use(express.static("public"));

app.engine("html", es6Renderer);
app.set("views", "html");
app.set("view engine", "html");

const publicDir = express.static("public");
app.use(publicDir);

const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({ extended: true });
app.use(parser);

const sqlite3 = require("sqlite3").verbose();

const port = 8080;
const DBName = "hashtags";

const db = new sqlite3.Database(`./${DBName}.db`, err => {
  if (err) return console.error(err.message);
  console.log(`Connected to the "${DBName}" SQlite database.`);
});

app.get("/", (req, res) => {
  const mainCategories = req.query.mainCategories;
  const subCategories = req.query.subCategories;
  const data = {
    title: "TheGramTag"
  };
  const sqlSelect = `SELECT ${subCategories} FROM ${mainCategories} ORDER BY RANDOM() LIMIT 5`;
  console.log(sqlSelect);
  db.all(sqlSelect, (err, all) => {
    console.log(all);
    res.render("getstarted", { locals: data });
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
