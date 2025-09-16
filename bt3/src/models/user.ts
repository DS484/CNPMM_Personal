import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export interface UserAttributes {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  gender: 'Male' | 'Female' | 'Other';
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'address'> { }

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public address?: string;
  public gender!: 'Male' | 'Female' | 'Other';
}

export default (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female', 'Other'),
      allowNull: false,
      defaultValue: 'Other'
    }
  }, {
    sequelize,
    tableName: 'Users'
  });
  return User;
};
