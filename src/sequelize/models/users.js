"use strict";
import { Model } from 'sequelize';

export default (sequelize, Sequelize) => {
  class User extends Model {}
  User.init({
    id: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      field: 'email'
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'password'
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'firstName'
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'lastName'
    },
  }, 
  { sequelize });
  return User;
};

// export default (sequelize, Sequelize) => {
//   class User extends Model {}
//   User.init({


//   }, { sequelize });
//   return User;
// }