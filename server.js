/* Servidor estático mínimo para la app (node server.js) */
const http = require("http"), fs = require("fs"), p = require("path");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
  ".json": "application/json",
  ".png": "image/png"
};
const PORT = process.env.PORT || 8080;
http.createServer((req, res) => {
  let f = decodeURI(req.url.split("?")[0]);
  if (f === "/") f = "/index.html";
  const fp = p.join(__dirname, p.normalize(f));
  fs.readFile(fp, (e, d) => {
    if (e) { res.writeHead(404); res.end("404 Not Found"); }
    else { res.writeHead(200, { "Content-Type": types[p.extname(fp)] || "application/octet-stream" }); res.end(d); }
  });
}).listen(PORT, () => console.log("Servidor en http://localhost:" + PORT));
