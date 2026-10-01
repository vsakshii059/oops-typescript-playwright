import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class Header {
  private readonly cartButton = '.shopping_cart_link';
  private readonly menuButton = '#react-burger-menu-btn';
  private readonly logoutButton = '#logout_sidebar_link';
  private readonly cartBadge = '.shopping_cart_badge';

  constructor(private readonly page: Page) {}

  async clickCart(): Promise<void> {
    await this.page.click(this.cartButton);
  }

  async openMenu(): Promise<void> {
    await this.page.click(this.menuButton);
  }

  async logout(): Promise<void> {
    await this.openMenu();
    await this.page.click(this.logoutButton);
  }

  async getCartItemCount(): Promise<number> {
    const badge = await this.page.locator(this.cartBadge).textContent();
    return badge ? Number.parseInt(badge, 10) : 0;
  }

  async isCartBadgeVisible(): Promise<boolean> {
    return await this.page.locator(this.cartBadge).isVisible();
  }
}
