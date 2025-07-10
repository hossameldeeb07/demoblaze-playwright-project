import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.click('a:has-text("Add to cart")');

    
    await this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toContain('Product added');
      await dialog.accept();
    });

    await this.page.waitForTimeout(1000); 
  }

  async goToCart() {
    await this.page.click('#cartur');
  }

  async placeOrder() {
    await this.page.click('button:has-text("Place Order")');
  }

  async fillOrderForm() {
    await this.page.fill('#name', 'Test User');
    await this.page.fill('#country', 'Testland');
    await this.page.fill('#city', 'Testville');
    await this.page.fill('#card', '1234 5678 9012 3456');
    await this.page.fill('#month', '12');
    await this.page.fill('#year', '2025');
  }

  async submitOrder() {
    await this.page.click('button:has-text("Purchase")');
    await this.page.waitForSelector('.sweet-alert.showSweetAlert.visible');
    const confirmation = await this.page.textContent('.sweet-alert.showSweetAlert.visible');
    expect(confirmation).toContain('Thank you for your purchase!');
  }
}
