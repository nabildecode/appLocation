import { Request, Response, NextFunction } from 'express';

import { Provider, Role } from '../../orm/entities/types';
import { findUser,findUserByEmail } from '../../services/user.service';
import { JwtPayload } from '../../types/JwtPayload';
import { createJwtToken } from '../../utils/createJwtToken';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    console.log(email)
    const user = await findUser( {email:email});
    console.log(user)

    if (!user) {

      return res.customSuccess(500, 'Incorrect email or password', {}, false);
    }

    if (!user.checkIfPasswordMatch(password)) {

      return res.customSuccess(400, 'Incorrect password', {}, false);
      
    }

    const jwtPayload: JwtPayload = {
      issuer: '/api/v1/auth/login',
      provider: user.provider as Provider,
      id: user.id,
      role: user.role as Role,
    };

    try {
      const token = createJwtToken(jwtPayload);
      return res.customSuccess(
        200,
        'Token successfully created.',
        { token: `${token}`, user: user },
        true
      );
    } catch (err) {
      return res.customSuccess(200, 'Error', {}, false);
    }
  } catch (err) {
    console.log(err);
    return res.customSuccess(200, 'Error', {}, false);
  }
};
