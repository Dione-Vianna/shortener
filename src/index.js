const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
  const htmlPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(htmlPath);
});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running PORT ${server.address().port}`);
});
