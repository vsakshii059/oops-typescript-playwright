import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

export class CartPage extends BasePage {
  private readonly cartList = '.cart_list';
  private readonly checkoutButton = '[data-test="checkout"]';
  private readonly inventoryItem = '.cart_item';
  readonly header: Header;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
  }

  async validatePage(): Promise<void> {
    await this.page.locator(this.cartList).waitFor({ state: 'visible' });
  }

  async open(): Promise<void> {
    await this.openPage('/cart.html');
  }

  async getItemCount(): Promise<number> {
    return await this.page.locator(this.cartList).locator(this.inventoryItem).count();
  }

  async clickCheckout(): Promise<void> {
    await this.page.click(this.checkoutButton);
  }

  async getCartItems(): Promise<ProductCard[]> {
    const items = await this.page.locator(this.inventoryItem).all();
    return items.map((item) => new ProductCard(this.page, item));
  }
}
