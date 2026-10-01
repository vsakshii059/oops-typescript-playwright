import { Locator, Page } from '@playwright/test';

export class ProductCard {
  private readonly productName: Locator;
  private readonly productPrice: Locator;
  private readonly addToCartButton: Locator;
  private readonly removeButton: Locator;

  constructor(
    private readonly page: Page,
    private readonly productElement: Locator,
  ) {
    this.productName = this.productElement.locator('.inventory_item_name');
    this.productPrice = this.productElement.locator('.inventory_item_price');
    this.addToCartButton = this.productElement.locator('[data-test^="add-to-cart"]');
    this.removeButton = this.productElement.locator('[data-test^="remove"]');
  }

  async getName(): Promise<string> {
    return await this.productName.textContent() ?? '';
  }

  async getPrice(): Promise<string> {
    return await this.productPrice.textContent() ?? '';
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async remove(): Promise<void> {
    await this.removeButton.click();
  }

  async isAddToCartButtonVisible(): Promise<boolean> {
    return await this.addToCartButton.isVisible();
  }
}
