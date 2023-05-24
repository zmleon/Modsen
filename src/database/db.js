const Sequelize = require("sequelize");
const config = require("../config/index");
const sequelize = new Sequelize("Meetups", "postgres", "19374628", config);

module.exports = sequelize;

const connect = async () => { };

module.exports = { sequelize, Sequelize, connect };