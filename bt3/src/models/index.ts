import { Sequelize } from 'sequelize';
import userModel, { User } from './user';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    dialect: process.env.DB_DIALECT as any,
    logging: process.env.DB_LOGGING === 'true'
  }
);

const UserModel = userModel(sequelize);

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables synced!');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

export { sequelize, UserModel };