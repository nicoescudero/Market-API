const {sequelize}=require('../db');
const {DataTypes}=require('sequelize');
const userModel=require('./user.model');
const publicationModel=require('./publication.model');

const User=userModel(sequelize,DataTypes);
const Publication=publicationModel(sequelize,DataTypes);

User.hasMany(Publication,{foreignKey:'idUser'});
Publication.belongsTo(User,{foreignKey:'idUser'});


module.exports={User,Publication};