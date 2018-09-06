/* eslint-disable */
require("babel-register");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = process.env.BABEL_ENV || "development";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

//TODO: need to check little bit more for request object
// if (process.env.NODE_ENV !== "production") {
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
process.on("unhandledRejection", err => {
  console.log(err.stack);
  console.log("got unhandledRejection error ", err);
});
// Ensure environment variables are read.
require("../../config/env");

const fs = require("fs");

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

    const port = DEFAULT_PORT;
    const protocol = process.env.HTTPS === "true" ? "https" : "http";

    app.use(compression());
    app.use(morgan("dev"));
    app.use(bodyParser.json({ limit: "1mb" }));
    app.set("view engine", "html");

    // Launch express server for listening.
    app.listen(port, HOST, err => {
      if (err) {
        return console.log(err);
        //  https://github.com/ButterCMS/ssr-cra-async/blob/master/server/index.js
      }
      console.log(
        chalk.cyan(
          `Starting the express server in  ${process.env.NODE_ENV} mode ...\n`,
        ),
      );
    });

    ["SIGINT", "SIGTERM"].forEach(sig => {
      process.on(sig, () => {
        // app.close();
        process.exit();
      });
    });
