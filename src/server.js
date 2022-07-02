const { Sequelize } = require("sequelize");
const config = require("./database/config/config.json")[process.env.NODE_ENV];

const db = new Sequelize("postgres://localhost:5432", config);

module.exports = db;