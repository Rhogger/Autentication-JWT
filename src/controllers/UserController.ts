import { Request, Response } from 'express';

class UserController {
  constructor() {}

  static async open(request: Request, response: Response) {
    response.json({
      message: 'Parabéns, você foi autenticado!',
    });
  }
}

export default UserController;
