const express = require('express');
const cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: ['*'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie1', 'cookie2']
}).listen(3020, "localhost", () => {
    console.log("Cors anywhere is currently running")
})

