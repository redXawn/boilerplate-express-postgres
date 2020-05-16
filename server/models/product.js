'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    name: DataTypes.STRING,
    buy_price: DataTypes.INTEGER,
    sell_price: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};