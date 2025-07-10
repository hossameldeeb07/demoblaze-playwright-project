import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { generateRandomUser } from '../utils/generateUser';

test('User can register with valid data', async ({ page }) => {
  const homePage = new HomePage(page);
  const { username, password } = generateRandomUser();

  await homePage.goto();
  await homePage.openSignUpModal();
  await homePage.register(username, password);
});
