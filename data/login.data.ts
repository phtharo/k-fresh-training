import type { User } from '../model/user';
import { Constants } from '../utilities/constants';

export const user: User = {
  username: Constants.LOGIN_USERNAME,
  password: Constants.LOGIN_PASSWORD,
};
