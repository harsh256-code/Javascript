const http = require("http");
const chats = require("./data");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req(chats));
    res.end();
  })
  .listen(5000);
