const http = require("http");
const url = require("url");
const fs = require("fs");
const replaceTemplate = require("./modules/replaceTemplate");
const replaceCards = require("./modules/replaceCards");

const cardData = fs.readFileSync(`${__dirname}/dev-data/card.json`, "utf-8");
const cardJson = JSON.parse(cardData);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataJson = JSON.parse(data);

// Templates
const indexPage = fs.readFileSync(`${__dirname}/temp-index.html`, "utf-8");
const cardPage = fs.readFileSync(`${__dirname}/card.html`, "utf-8");
const mainCss = fs.readFileSync(`${__dirname}/css/main.css`, "utf-8");
const allMinCSs = fs.readFileSync(`${__dirname}/css/all.min.css`, "utf-8");
const contactCss = fs.readFileSync(
  `${__dirname}/css/contact.section.css`,
  "utf-8"
);
// console.log(contactCss);

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  console.log(req.url);
  if (pathname === "/" || pathname === "main") {
    res.writeHead(200, { "Content-type": "text/html" });
    let output = replaceTemplate(indexPage, dataJson);
    let card = cardJson.map((el) => replaceCards(cardPage, el)).join("");
    output = output.replace(/{%PROJECT_CARDS%}/g, card);
    output = output.replace(/{%main%}/g, `<style>${mainCss}</style>`);
    res.end(output);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page not Found 404</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listenig port 8000");
});
