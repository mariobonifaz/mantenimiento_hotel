"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// adapters/persistence/sequelize.ts
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('hex_demo', 'postgres', 'POSTGRES', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});
