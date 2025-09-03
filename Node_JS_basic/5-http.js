const http = require('http');
const students = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      students(process.argv[2])
        .then((data) => {
          res.end(data);
        })
        .catch((error) => {
          res.end(error.message);
        });
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
});

app.listen(port);

module.exports = app;
