"use strict";
const readline = require('readline-sync')
const sqlite3 = require('sqlite3').verbose()
const dbName = 'hashtags'

const express = require("express");
const app = express();
app.use(express.static("public"));
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


const db = new sqlite3.Database('./hashtags.db', (err) => {
	if (err) return console.error(err.message)
	console.log('Connected to the SQlite database.')
    db.all('SELECT general FROM photography ORDER BY RANDOM() LIMIT 5', function(err, all) {
      console.log(all)
    });
    db.close((err) => {
        if (err) return console.error(err.message)
        console.log('Close the database connection.')
    })
})
