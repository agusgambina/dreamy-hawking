"use strict";
import Sequelize from 'sequelize';
const path = require('path');

const sequelize = new Sequelize(
  'dreamy_hawking_test',
  'root',
  'root', {
    host: '127.0.0.1',
    dialect: 'sqlite',
    logging: false,
    storage: path.resolve(__dirname, './../.data/dreamy_hawking_test.sqlite')
});

export default sequelize;
