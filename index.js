const express = require('express');
const app = express();
const port = 3000;
//const HTML_DIR = path.join(__dirname, '/public/')
//app.use(express.static(HTML_DIR))
app.use(express.static(__dirname + '/public/'));


app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

