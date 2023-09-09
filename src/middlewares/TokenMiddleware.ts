import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../constants/SECRETKEY';

class TokenMiddlewares {
  // private token

  static authenticate(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { authorization } = request.headers;

    jwt.verify(authorization as string, SECRET_KEY, (error, user) => {
      if (error) {
        response.status(401).json({
          message: 'Erro, token inválido.',
        });
        return;
      }

      request.body.user = user;

      next();
    });
  }
}

export default TokenMiddlewares;
