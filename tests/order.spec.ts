import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('User can successfully create an order for Apple monitor 24', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await homePage.goto();
  await loginPage.openLoginModal();
  await loginPage.login('hess', '1234567');

  await homePage.navigateToMonitors();
  await homePage.selectAppleMonitor24();

  await cartPage.addToCart();
  await cartPage.goToCart();

  await cartPage.placeOrder();
  await cartPage.fillOrderForm();
  await cartPage.submitOrder();
});
