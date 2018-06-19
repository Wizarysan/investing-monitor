const http = require('http');
const parseUrl = require('parseurl');
const path = require('path');
const express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '')));

app.all('/api/test', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
  })

app.get('*', (req, res) => {
    res.sendFile('index.html');
  });

  
console.log('\x1b[36m%s\x1b[0m', 'Invest monitor is listening on port 3011');
app.listen(3011);