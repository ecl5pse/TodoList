'use strict';



export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',{
      firstName:{
        type: DataTypes.STRING,
        allowNull:false,
    
      },
      lastName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:null,
      },
      password:{
        type:DataTypes.TEXT,
        field:'passwordHash',
        allowNull:false,
        set (val) {
          this.setDataValue( 'password', bcrypt.hashSync( val, 6 ) );
        }
      },
      accessToken:{
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
      }


    },{}

  );
  User.associate = function (models) {
    User.hasMany( models.Task, {
      foreignKey: 'userId'
    } )

  return User;
}
};