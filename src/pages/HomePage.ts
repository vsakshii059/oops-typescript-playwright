import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly pageTitle = '.title';
  private readonly inventoryList = '.inventory_list';
  private readonly addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';

  constructor(page: Page) {
    super(page);
  }

  async validateLandingPage(): Promise<void> {
    await this.waitForElement(this.pageTitle);
    await this.waitForElement(this.inventoryList);
  }

  async addFirstItemToCart(): Promise<void> {
    await this.page.click(this.addToCartButton);
  }

  async getPageHeading(): Promise<string> {
    return await this.page.locator(this.pageTitle).textContent() ?? '';
  }
}
