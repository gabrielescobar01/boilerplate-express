let express = require('express');
let app = express();
const absolutePath = __dirname + '/views/index.html';
const mySecret = process.env['MESSAGE_STYLE'];

console.log("Hello World");

app.get('/', (req, res) => {
  res.sendFile(absolutePath)
});

// Middlewares
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({
      "message": "Hello json"
    }.toUpperCase());
  } else {
    res.json({
      "message": "Hello json"
    });
  }

});
































module.exports = app;
