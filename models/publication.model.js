module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('Publication',{
        id:{
            primaryKey: true,
            type:DataTypes.INTEGER,
            autoIncrement: true
        },
        description:{
            type:DataTypes.STRING,
            required:true,
        },
        photo:{
            type:DataTypes.STRING,
            required:true
        },
        idUser:{
            type:DataTypes.INTEGER,
            required:true
        }
    });
}