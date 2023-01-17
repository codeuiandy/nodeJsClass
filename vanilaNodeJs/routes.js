const routesHandler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.statusCode = 201;
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
    });
    res.setHeader("Content-Type", "text/html");
    res.write("<html><h1>HOME PAGEs</h1></html>");
    res.end();
  }

  if (url === "/test") {
    res.write("<html><h1>Hello</h1></html>");
    res.end();
  }
};
exports.handler = routesHandler;
exports.someText = "Hello";
