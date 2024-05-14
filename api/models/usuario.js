'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    UF: DataTypes.STRING,
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    RG: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    zona: DataTypes.STRING,
    endereco: DataTypes.STRING,
    municipio: DataTypes.STRING,
    cep: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};