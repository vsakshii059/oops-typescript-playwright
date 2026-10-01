import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

export class HomePage extends BasePage {
  private readonly pageTitle = '.title';
  private readonly inventoryList = '.inventory_list';
  private readonly inventoryItem = '.inventory_item';
  readonly header: Header;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
  }

  async validatePage(): Promise<void> {
    await this.page.locator(this.pageTitle).waitFor({ state: 'visible' });
    await this.page.locator(this.inventoryList).waitFor({ state: 'visible' });
  }

  async addFirstItemToCart(): Promise<void> {
    const firstProduct = this.page.locator(this.inventoryItem).first();
    await firstProduct.locator('[data-test^="add-to-cart"]').click();
  }

  async getProductCount(): Promise<number> {
    return await this.page.locator(this.inventoryItem).count();
  }

  async getAllProducts(): Promise<ProductCard[]> {
    const listedProducts = await this.page.locator(this.inventoryItem).all();
    return listedProducts.map((product) => new ProductCard(this.page, product));
  }

  async getProductByName(productName: string): Promise<ProductCard> {
    const productElement = this.page.locator(this.inventoryItem, {
      has: this.page.locator(`text=${productName}`),
    });
    return new ProductCard(this.page, productElement);
  }

  async getPageHeading(): Promise<string> {
    return await this.page.locator(this.pageTitle).textContent() ?? '';
  }
}
