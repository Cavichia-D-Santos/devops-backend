import { DataType, DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface UsuarioAttributes{
    id?: number; //? => nem sempre vai ter o ID, entao ele gera
    nome: string;
    email: string;
    senha: string;
}

export class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
    public id!: number; //! => sempre precisa de valor
    public nome!: string;
    public email!: string;
    public senha!: string;
}

Usuario.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuario'
})