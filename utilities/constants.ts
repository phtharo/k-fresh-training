import process from 'node:process';

export class Constants {
  static readonly ENV = process.env.ENV || 'qa';
  static readonly BASE_URL = process.env.BASE_URL || 'https://ecommerce-playground.lambdatest.io';
  static readonly LOGIN_URL = `${Constants.BASE_URL}index.php?route=account/login`;
  static readonly USER_ACCOUNT_URL = `${Constants.BASE_URL}index.php?route=account/account`;
  static readonly LOGIN_USERNAME = process.env.LOGIN_USERNAME || 'phumy15051970@gmail.com';
  static readonly LOGIN_PASSWORD = process.env.LOGIN_PASSWORD || '123456';
  static readonly USERS_JSON_FILE = './data/users.json';
  static readonly HOME_PAGE_URL = `${Constants.BASE_URL}/index.php?route=common/home`;
  static readonly CART_URL = `${Constants.BASE_URL}/index.php?route=checkout/cart`;
  static readonly CHECKOUT_URL = `${Constants.BASE_URL}/index.php?route=checkout/checkout`;
}
