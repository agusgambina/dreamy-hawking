require('dotenv').config()
import Sequelize from 'sequelize';

let db = {
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_USERNAME_PASSWORD,
  database : process.env.DB_DATABASE,
  port     : process.env.DB_PORT,
}

const sequelize = new Sequelize(db.database, process.env.DB_USERNAME, process.env.DB_USERNAME_PASSWORD, {
  host: db.host,
  dialect: 'mysql',
  logging: (db.logging) ? db.logging : false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: "-03:00"
});

export default sequelize;