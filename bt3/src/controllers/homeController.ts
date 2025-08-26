import { Request, Response } from 'express';
import CRUDService from '../services/CRUDService';

export const getHomePage = async (req: Request, res: Response) => {
  return res.render('crud');
};

export const postCRUD = async (req: Request, res: Response) => {
  try {
    await CRUDService.createNewUser(req.body);
    return res.redirect('/get-crud');
  } catch (e: any) {
    console.error(e);
    return res.status(400).send('Tạo user thất bại: ' + e.message);
  }
};

export const displayGetCRUD = async (req: Request, res: Response) => {
  const data = await CRUDService.getAllUsers();
  return res.render('users/findAllUser', { data });
};

export const getEditCRUD = async (req: Request, res: Response) => {
  const userId = req.query.id as string;
  const user = await CRUDService.getUserById(userId);
  if (!user) return res.status(404).send('User không tồn tại');
  return res.render('users/updateUser', { user });
};

export const putCRUD = async (req: Request, res: Response) => {
  try {
    await CRUDService.updateUserData(req.body);
    return res.redirect('/get-crud');
  } catch (e: any) {
    console.error(e);
    return res.status(400).send('Cập nhật thất bại: ' + e.message);
  }
};

export const deleteCRUD = async (req: Request, res: Response) => {
  const id = req.query.id as string;
  await CRUDService.deleteUserById(id);
  return res.redirect('/get-crud');
};
