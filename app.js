const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/test", (req, res, next) => {
  console.log("MIDDLE wear");
  res.send([
    {
      name: "andrew",
      age: 20,
      favColor: {
        color: "red",
      },
    },
    {
      name: "Joe",
      age: 20,
      favColor: {
        color: "red",
      },
    },
    {
      name: "Titi",
      age: 20,
      favColor: {
        color: "red",
      },
    },
    {
      name: "Max",
      age: 20,
      favColor: {
        color: "red",
      },
    },
  ]);
  // res.setHeader("Content-Type","j")
  //  next(); // Allows the next middleware block to run
});

app.use("/login", (req, res, next) => {
  console.log("res>>>>>", req.body);
  res.send({ response: req.body.title });
});

app.use("/", (req, res, next) => {
  console.log("MIDDLE wear again ");
  res.send({});
});

app.listen(3000);
