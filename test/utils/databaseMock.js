"use strict";
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'dreamyHawkingDb_test',
  'root',
  'root', {
    host: '127.0.0.1',
    dialect: 'sqlite',
    logging: false,
    storage: './test/data/dreamyHawkingDb_test.sqlite',
});

export default sequelize;