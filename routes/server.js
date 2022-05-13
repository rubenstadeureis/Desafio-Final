const express = require("express");

const routes = require('./user')

const app = express();

app.use(express.json());

routes(app);

module.exports = app;
