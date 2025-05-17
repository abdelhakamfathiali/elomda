import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = 85;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    if (pathname === "/a") {
      app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      app.render(req, Rewind, "/b", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(85);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});

// const express = require("express");
// const next = require("next");

// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV === "production";
// const app = next({ dev, host, port });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get("*", (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });
// const express = require("express");
// const next = require("next");

// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV === "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // server.get("/:page", (req, res) => {
//   //   const page = req.params.page;
//   //   let file = "";
//   //   switch (page) {
//   //     case "example1":
//   //       file = "/projects/example1";
//   //       break;
//   //     case "example2":
//   //       file = "/projects/example2";
//   //       break;
//   //   }
//   //   return app.render(req, res, file, { page });
//   // });

//   server.get("*", (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });
