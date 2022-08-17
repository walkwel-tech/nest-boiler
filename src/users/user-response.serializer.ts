import { User } from './entities/user.entity';

const userResponseSerializer = (user: User) => {
  delete user.password;
  delete user.hash;
  delete user.previousPassword;
};

export default userResponseSerializer;
