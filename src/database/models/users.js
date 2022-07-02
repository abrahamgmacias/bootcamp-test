'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsTo(models.roles, { foreignKey: "role_id", allowNull: false });
      models.roles.hasOne(users);
    }
  }
  users.init({
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: Sequelize.STRING,
    role_id: Sequelize.INTEGER
  },
    {
      sequelize,
      modelName: 'users'
    });
  return users;
};