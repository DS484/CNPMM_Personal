import { UserModel } from '../models';

const createNewUser = async (data: any) => {
  return await UserModel.create(data);
};

const getAllUsers = async () => {
  return await UserModel.findAll();
};

const getUserById = async (id: string | number) => {
  return await UserModel.findByPk(id);
};

const updateUserData = async (data: any) => {
  const user = await UserModel.findByPk(data.id);
  if (!user) throw new Error('User not found');
  return await user.update(data);
};

const deleteUserById = async (id: string | number) => {
  const user = await UserModel.findByPk(id);
  if (!user) throw new Error('User not found');
  return await user.destroy();
};

export default {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserData,
  deleteUserById
};
