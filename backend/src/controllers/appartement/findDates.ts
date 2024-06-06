import { Request, Response, NextFunction } from 'express';
import { findUserById } from '../../services/user.service';
import {findAppartementReservedDates, findAppartements, findAppartementsByUser} from '../../services/appartement.service';


export const findDate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.jwtPayload;



    try {
        const dates = await findAppartementReservedDates(id);


      
    } catch (err) {
      
    }

};

