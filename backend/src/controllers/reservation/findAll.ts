import { Request, Response, NextFunction } from 'express';

import {
<<<<<<< HEAD
  findCheckinAll, findReservationsById, findReservationsWithApartments
=======
  findCheckinAll, findReservationsById, findReservationsWithApartments,
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685

} from '../../services/checkin.service';

export const findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  try {
    const { id, role } = req.jwtPayload;
    if(role == "ADMIN") {
      const checkins = await findReservationsWithApartments();

      return res.customSuccess(
          200,
          'List of checkins.',
          { checkins: checkins },
          true
      );
    } else {
      const checkins = await findReservationsById(id);

      return res.customSuccess(
          200,
          'List of checkins.',
          { checkins: checkins },
          true
      );
    }
    
  } catch (err) {
    return res.customSuccess(200, `checkins not found`, {}, false);
  }
};
export const findReservationsByUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  const { id } = req.jwtPayload;
  try {
    const checkins = await findReservationsById(id);

    return res.customSuccess(
        200,
        'List of checkins.',
        { checkins: checkins },
        true
    );
  } catch (err) {
    console.log(err)
    return res.customSuccess(200, `checkins not found`, {}, false);
  }
};
<<<<<<< HEAD

=======
export const findReservationsByUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  const { id } = req.jwtPayload;
  try {
    const checkins = await findReservationsById(id);

    return res.customSuccess(
        200,
        'List of checkins.',
        { checkins: checkins },
        true
    );
  } catch (err) {
    console.log(err)
    return res.customSuccess(200, `checkins not found`, {}, false);
  }
};
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
