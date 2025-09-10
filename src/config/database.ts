import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({ //Objeto de config do sequelize
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
});

export const connectDatabase = async () => { 
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Banco de dados conectado com sucesso');
    } catch (error) {
        console.log('Erro no DB', error);
    }
}