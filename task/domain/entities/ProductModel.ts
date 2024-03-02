import { DataTypes } from 'sequelize';
import { sequelize } from '../../../database/sequelize';

const ProductModel = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    // Agrega aquí otros campos relevantes para tu producto
},{
    tableName: "Product",
    freezeTableName:true
});

ProductModel.sync()
  .then(() => {
    console.log('Tabla de productos creada correctamente.');
  })
  .catch(error => {
    console.error('Error al crear la tabla de productos:', error);
  });

export default ProductModel;
