import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

import { ConstsUser } from '../../../consts/ConstsUser';
import logger from '../../../core/logger';
import { ErrorValidation } from '../../../utils/response/custom-error/types';
export const validatorRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, password, firstName, lastName } = req.body;
  const errorsValidation: ErrorValidation[] = [];

  email = !email ? '' : email;
  password = !password ? '' : password;
  firstName = !firstName ? '' : firstName;
  lastName = !lastName ? '' : lastName;

  if (!validator.isEmail(email)) {
    errorsValidation.push({ email: 'Email is invalid' });
  }

  if (validator.isEmpty(email)) {
    errorsValidation.push({ email: 'Email is required' });
  }

  if (validator.isEmpty(password)) {
    errorsValidation.push({ password: 'Password is required' });
  }

  if (!validator.isLength(password, { min: ConstsUser.PASSWORD_MIN_CHAR })) {
    errorsValidation.push({
      password: `Password must be at least ${ConstsUser.PASSWORD_MIN_CHAR} characters`,
    });
  }
  if (validator.isEmpty(lastName)) {
    errorsValidation.push({ lastName: 'lastName is required' });
  }

  if (validator.isEmpty(firstName)) {
    errorsValidation.push({ firstName: 'firstName is required' });
  }

  if (errorsValidation.length !== 0) {
    return res.customSuccess(200, 'Validation', { errorsValidation }, false);
  }
  return next();
};
