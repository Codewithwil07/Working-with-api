import { Sequelize } from 'sequelize';

const connection = new Sequelize('parking', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

export default connection;
