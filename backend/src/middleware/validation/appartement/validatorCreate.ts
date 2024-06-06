import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

import { ErrorValidation } from '../../../utils/response/custom-error/types';
import { add } from 'winston';
export const validatorCreate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { name,addresse,frais_menage } = req.body;
  const errorsValidation: ErrorValidation[] = [];

  name = !name ? '' : name;

  if (validator.isEmpty(name)) {
    errorsValidation.push({ name: 'name is required' });
  }
  if (validator.isEmpty(addresse)) {
    errorsValidation.push({ addresse: 'addresse is required' });
  }
  if (validator.isEmpty(frais_menage)) {
    errorsValidation.push({ frais_menage: 'frais_menage is required' });
  }
  if (!validator.isNumeric(frais_menage)){
    errorsValidation.push({frais_menage:'frais_menage is not number'});
  }

  if (errorsValidation.length !== 0) {
    return res.customSuccess(200, 'Validation', { errorsValidation }, false);
  }
  return next();
};
