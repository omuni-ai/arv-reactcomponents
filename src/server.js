/* eslint-disable */
require("babel-register");
const express = require("express");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fs = require("fs");

const prePath = "src/AppComponents/";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = process.env.BABEL_ENV || "development";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

process.on("unhandledRejection", err => {
  console.log(err.stack);
  console.log("got unhandledRejection error ", err);
});
// Ensure environment variables are read.
require("../config/env");

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const port = DEFAULT_PORT;
const protocol = process.env.HTTPS === "true" ? "https" : "http";

app.use(compression());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "1mb" }));
app.set("view engine", "html");
console.log(`${__dirname}/views`);

app.set("views", `${__dirname}/views`);
app.use(express.static(path.join(__dirname, "../build")));

function sendData(req, res, next) {
  if (req.method === "POST" && req.url === "/api/getComponentData") {
    fs.readFile(prePath + req.body.componentFilePath, (err, data) => {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    });
  } else {
    next();
  }
}

app.post("/api/getComponentData", sendData);

// Launch express server for listening.
app.listen(port, HOST, err => {
  if (err) {
    return console.log(err);
  }
  console.log(
    `Starting the express server in  ${process.env.NODE_ENV} mode ...\n`,
  );
});

["SIGINT", "SIGTERM"].forEach(sig => {
  process.on(sig, () => {
    // app.close();
    process.exit();
  });
});
