import { Request, Response, NextFunction } from 'express';

import {
  deleteUser,
  findUserById,
  saveUser,
} from '../../services/user.service';
import { deleteAppartement } from '../../controllers/appartement';
import { deleteAppartementById } from '../../services/appartement.service';

export const editProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const id  = req.params.id;
  try {
    const user = await findUserById(Number(id));


    if (!user) {
      return res.customSuccess(200, 'Error', {}, false);
    }
    if (email) user.email = email;    

    await saveUser(user);
    return res.customSuccess(
      200,
      'Profile successfully changed.',
      { user },
      true
    );
  } catch (err) {
    console.log(err);
    return res.customSuccess(200, 'Error', {}, false);
  }
};
export const deleteProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  try {
    const user = await findUserById(id);
   console.log(user.id + "*********************")

    if (!user) {
      return res.customSuccess(200, 'Error', {}, false);
    }
    await deleteAppartementById(id)
    await deleteUser(user);
    return res.customSuccess(200, 'Profile successfully delete.', {}, true);
  } catch (err) {
    return res.customSuccess(200, 'Error', {}, false);
  }
};
