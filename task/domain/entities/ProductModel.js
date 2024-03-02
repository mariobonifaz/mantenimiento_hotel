"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../../database/sequelize");
const ProductModel = sequelize_2.sequelize.define('Product', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    // Agrega aquí otros campos relevantes para tu producto
}, {
    tableName: "Product",
    freezeTableName: true
});
ProductModel.sync()
    .then(() => {
    console.log('Tabla de productos creada correctamente.');
})
    .catch(error => {
    console.error('Error al crear la tabla de productos:', error);
});
exports.default = ProductModel;
