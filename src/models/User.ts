import bcrypt from 'bcrypt';

type UserProps = {
  id?: number;
  username: string;
  password: string;
};

class User {
  private user: UserProps[] = [];

  async createUser(user: UserProps) {
    const pass = await this.hashPassword(user.password);

    this.user.push({
      id: this.user.length + 1,
      username: user.username,
      password: pass,
    });

    console.log(pass);
  }

  findUserByUsername(username: string) {
    return this.user.find((user: UserProps) => user.username == username);
  }

  async hashPassword(plainTextPassword: string) {
    const saltRounds = 10;

    try {
      const salt = await bcrypt.genSalt(saltRounds);

      const hashedPassword = await bcrypt.hash(plainTextPassword, salt);

      return hashedPassword;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default User;
