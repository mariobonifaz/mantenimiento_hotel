"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// adapters/persistence/models/UserModel.ts
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
const UserModel = sequelize_2.sequelize.define('User', {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = UserModel; // Asegúrate de exportar correctamente el modelo aquí