import { Router } from 'express';

import {
  changePassword,
  editProfile,
  securityPassword,
  forgotPassword,
  resetPassword,
  deleteProfile,



} from '../../controllers/users';
import { checkJwt } from '../../middleware/checkJwt';
import upload from '../../middleware/ImageConfig';
import { validatorResetPassword } from '../../middleware/validation/users';
import { checkRole } from '../../middleware/checkRole';
import {findAll, findById} from "../../controllers/users/findAll";



const router = Router();

router.post('/change-password', [], changePassword);
router.post('/forgot-password', [], forgotPassword);
router.post('/reset-password', [validatorResetPassword], resetPassword);
router.post('/security-password', [checkJwt], securityPassword);

router.put('/edit-profile/:id',  editProfile);
router.delete('/delete/:id', [checkJwt], deleteProfile);
router.get('/getAll', findAll);
router.get('/get/:id', findById);

export default router;
