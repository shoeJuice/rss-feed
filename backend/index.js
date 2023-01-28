const express = require('express');
const cors = require('cors');
const jsdom = require('jsdom');
const cors_proxy = require('cors-anywhere');
const http = require('http');

const { JSDOM } = jsdom;
global.DOMParser = new JSDOM().window.DOMParser;
const app = express()
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))


const server = http.createServer(app);

app.get('*', (req, res) => {
    let myUrl = req.url.slice(1);
    fetch(myUrl).then((res) => res.text())
    .then((text) => {
         res.type('application/xml')
         res.send(text);
         })
})

server.listen(3020, () => {
    console.log("Server is listening on host 3020")
})
