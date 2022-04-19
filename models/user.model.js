module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('User',{
        id:{
            primaryKey: true,
            type:DataTypes.INTEGER,
            autoIncrement: true
        },
        username:{
            type:DataTypes.STRING,
            required:true,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            required:true
        },
        photo:{
            type:DataTypes.STRING,
            required:false
        }
    });
}