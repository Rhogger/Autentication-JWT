type UserProps = {
  id: number;
  username: string;
  password: string;
};

class User {
  private user: UserProps[] = [];
}
