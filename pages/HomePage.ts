import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async openSignUpModal() {
        await this.page.click('#signin2');
        await this.page.waitForSelector('#signInModal', { state: 'visible' });
    }

    async register(username: string, password: string) {
        await this.page.fill('#sign-username', username);
        await this.page.fill('#sign-password', password);
        await this.page.click('button[onclick="register()"]');

        await this.page.once('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Sign up');
        await dialog.accept();
        });
    }
    async navigateToMonitors() {
    await this.page.click('a[onclick="byCat(\'monitor\')"]');
    }

    async selectAppleMonitor24() {
    await this.page.click('a:has-text("Apple monitor 24")');
    }

}
