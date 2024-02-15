// adapters/persistence/models/UserModel.ts
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

const UserModel = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
},{
    tableName: "User",
    freezeTableName:true
});

export default UserModel; // Asegúrate de exportar correctamente el modelo aquí
