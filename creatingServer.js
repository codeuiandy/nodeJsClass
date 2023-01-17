const http = require("http");

const RqListiner = (req, res) => {};
// To create a server
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
