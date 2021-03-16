const critical = require('critical')
const express = require('express')
const app = express()
const port = 80

app.get('/', function (req, res) {
  let url = req.query.url
  critical.generate({
    inline: false,
    base: 'public/',
    src: url,
    dest: './critical.css',
    dimensions: [
      {
        height: 500,
        width: 300,
      },
      {
        height: 720,
        width: 1280,
      },
    ],
  }, (err, output) => {
    if (err) {
      res.status(400);
      res.send('None shall pass');
    } else if (output) {
      res.send(output)
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})