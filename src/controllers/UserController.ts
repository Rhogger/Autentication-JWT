type UserProps = {
  id: number;
  username: string;
  password: string;
};

class UserController {
  private user: UserProps[] = [];

  constructor() {}

  static signin(req: Request, res: Response) {}
}
