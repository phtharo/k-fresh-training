import { test } from '../../pages/base-page';
import { user } from '../../data/login.data';
import { Constants } from '../../utilities/constants';

test('login on the-internet secure area', async ({ loginPage }) => {
  console.log(`Testing login with user from ${Constants.ENV} environment:`, user);
  await loginPage.commonPage.goto(Constants.LOGIN_URL);
  await loginPage.login(user);
  await loginPage.expectSuccessfulLogin();
  
});
