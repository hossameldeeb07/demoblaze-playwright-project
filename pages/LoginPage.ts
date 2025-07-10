import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openLoginModal() {
    await this.page.click('#login2');
    await this.page.waitForSelector('#logInModal', { state: 'visible' });
  }

  async login(username: string, password: string) {
    await this.page.fill('#loginusername', username);
    await this.page.fill('#loginpassword', password);
    await this.page.click('button[onclick="logIn()"]');

    await this.page.waitForSelector('#nameofuser', { timeout: 5000 });
    const welcomeText = await this.page.textContent('#nameofuser');
    expect(welcomeText).toContain(username);
  }
  async logout() {
  await this.page.click('#logout2');
  await this.page.waitForSelector('#login2', { state: 'visible' });
  }
}
