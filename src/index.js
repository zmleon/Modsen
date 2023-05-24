const express = require("express");
const app = express();
const env = require('./env/index');
const { connect } = require("./database/db");
const loader = require("./loader/index")



connect()
    .then(() => { console.log("Connected!!!"); })
    .catch((err) => console.log(err));

async function start() {
    app.use(loader);
    app.listen(env.db.port, () => console.log("Server started at port", env.db.port));
}

start();

module.exports = app;