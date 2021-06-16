const express = require("express");
const app = express();
const port = 3000;

app.use(MiddleWare1);
app.use(MiddleWare2);

function ErrorHandling(err, req, res, next) {
  if (err) {
    res.send("There is some error");
  }
  console.log("error");
  next();
}

function MiddleWare1(req, res, next) {
  console.log("I am middle one");
  const errObj = new Error("I am an error, do not scare with me");
  next(errObj);
}

function MiddleWare2(req, res, next) {
  console.log("I am middle two");
  next();
}

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("I am main function");
});
app.use(ErrorHandling);

app.listen(port);
