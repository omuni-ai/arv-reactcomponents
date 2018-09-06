/* eslint-disable */
require("babel-register");
const express = require("express");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = process.env.BABEL_ENV || "development";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const app = express();

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
    app.set('view engine', 'html');
    console.log(__dirname + '/views');

    app.set('views', __dirname + '/views');
    app.use(express.static(path.join(__dirname, '../build')));

    // Launch express server for listening.
    app.listen(port, HOST, err => {
      if (err) {
        return console.log(err);
      }
      console.log(`Starting the express server in  ${process.env.NODE_ENV} mode ...\n`);
    });

    ["SIGINT", "SIGTERM"].forEach(sig => {
      process.on(sig, () => {
        // app.close();
        process.exit();
      });
    });
