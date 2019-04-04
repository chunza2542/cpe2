const express = require('express')
const app = express()

const port = 8000

app.get('/', (req, res) => 
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Chun Rapeepat</title>
      <style>
        body {
          font-family: sans-serif;
        } 
      </style>
    </head>
    <body>
      <h1>CHUN RAPEEPAT</h1> 
      <a href="https://fb.com/chun42">Facebook</a>
    </body>
    </html> 
  `))

app.listen(port,
  () => console.log(`App running on port ${port}.`))
