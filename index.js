const http = require("node:http");

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello");
});

const PORT = process.env.PORT || 3030;

server.listen(PORT, () => console.log(`Server is running on port 3030`));