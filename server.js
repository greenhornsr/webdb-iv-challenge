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
    console.log(`${req.method} request to route ${req.url} at [${new Date().toISOString()}]`);
    next();
}

module.exports = server;
