const { Sequelize } = require("sequelize");
const sequelize = require("../utils/db");

const userModel = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNo: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = userModel;