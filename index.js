const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: "",
    }),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.get("/", (req, res, next) => {
  if (req.session.viewcount) {
    req.session.viewcount = req.session.viewcount + 1;
  } else {
    req.session.viewcount = 1;
  }
  res.send(
    `<h1>You have visited this site ${req.session.viewcount} times.</h1>`
  );
});

app.listen(3000);
