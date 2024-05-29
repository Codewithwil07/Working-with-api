import { DataTypes } from 'sequelize';
import connection from './connection.js';

const User = connection.define(
  'User',
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { tableName: 'users', createdAt: false, timestamps: false }
);

export default User;
