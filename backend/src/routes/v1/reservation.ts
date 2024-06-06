import { Router } from 'express';



import { checkJwt } from '../../middleware/checkJwt';
import {
  validatorCreate,
  validatorUpdate,
} from '../../middleware/validation/reservation';
import {create, deleteCheckin, findAll, findById, findReservationsByUserId, update} from "../../controllers/reservation";
<<<<<<< HEAD
import { checkRole } from '../../middleware/checkRole';
=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685




const router = Router();

router.post('/create', [], create);
router.get('/getAll',  [checkJwt], findAll);
router.delete('/delete/:id', [checkJwt], deleteCheckin);
router.put('/update/:id', [checkJwt, validatorUpdate], update);
router.get('/find/:id', [checkJwt], findById);
router.get('/getMine', [checkJwt], findReservationsByUserId);
<<<<<<< HEAD

=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685


export default router;
