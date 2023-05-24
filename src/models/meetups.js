const Sequelize = require("sequelize");
const { sequelize } = require("../database/db");

const meetup = sequelize.define("meetups", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: "id",
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        field: "title",
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        field: "description",
    },
    tags: {
        type: Sequelize.STRING,
        field: "tags",
    },
    location: {
        type: Sequelize.STRING,
        field: "location",
    },
    time: {
        type: Sequelize.DATE,
        field: "time",
        allowNull: false,
    },


});

module.exports = {
    meetup
};

module.exports = meetup;