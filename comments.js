// Create web server
// Define the port
const port = 3000;
// Create a web server
const http = require("http");
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader("Content-Type", "text/html");
  // Set the response body
  res.end("<h1>Hello World</h1>");
});
// Start the web server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});