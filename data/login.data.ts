import type { User } from '../model/user';
import { Constants } from '../utilities/constants';

export const user: User = {
  username: process.env.LOGIN_USERNAME,
  password: process.env.LOGIN_PASSWORD,
};
