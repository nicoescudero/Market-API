const {Sequelize} = require('@sequelize/core');
const {DIALECT,HOST,DB_NAME,DB_USER,DB_PASSWORD}=process.env;

const sequelize=new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host: HOST,
    dialect: DIALECT
});

async function connect(){
    try {
        await sequelize.sync({alter:true});
        await sequelize.authenticate();
        console.log('Successful Connection');
    } catch (error) {
        console.error(error);
    }
}

module.exports={connect,sequelize};