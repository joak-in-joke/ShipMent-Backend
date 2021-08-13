'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  brute.init({
    count: DataTypes.INTEGER,
    first_request: DataTypes.DATE,
    last_request: DataTypes.DATE,
    expires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'brute',
  });
  return brute;
};