const express = require('express');
const helmet = require('helmet');
const dishes = require('./resources/dishesRouter');

const server = express();

// helmet middleware
server.use(helmet());

server.use('/api/dishes', logger, dishes) 
// server.use('/api/recipes')

// sanity connect
server.get('/', logger, (req, res) => {
    res.send(`<h1> I am listening! </h1>`)
})

// logger middleware
function logger(req, res, next) {
    console.log(`\n${req.method} request to route ${req.url} at [${new Date().toISOString()}]\n`);
    next();
}

module.exports = server;
