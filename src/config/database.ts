import {Sequelize} from 'sequelize';
import { DatabaseConnection } from '../interfaces/database.types';
import { 
  DB_CONNECTION_DIALECT,
  DB_HOST,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD
} from './index';

 const db_connect = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_CONNECTION_DIALECT,
  pool: { 
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db_connect
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.log('Unable to connect to the database:', err);
  });

module.exports = db_connect;