import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('User can log out successfully', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.goto();
  await loginPage.openLoginModal();
  await loginPage.login('hess', '1234567');

  await loginPage.logout();

  const loginVisible = await page.isVisible('#login2');
  const signupVisible = await page.isVisible('#signin2');
  expect(loginVisible).toBeTruthy();
  expect(signupVisible).toBeTruthy();
});
