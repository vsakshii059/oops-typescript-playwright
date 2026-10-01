import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private readonly cartList = '.cart_list';
  private readonly checkoutButton = '[data-test="checkout"]';
  private readonly removeButton = '[data-test="remove-sauce-labs-backpack"]';

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.openPage('/cart.html');
  }

  async getItemCount(): Promise<number> {
    return await this.page.locator(this.cartList).locator('.cart_item').count();
  }

  async clickCheckout(): Promise<void> {
    await this.page.click(this.checkoutButton);
  }

  async removeFirstItem(): Promise<void> {
    await this.page.click(this.removeButton);
  }
}
