// adapters/persistence/sequelize.ts
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('hex_demo', 'postgres', 'POSTGRES', {
    host: 'localhost',
    dialect: 'postgres',
});
