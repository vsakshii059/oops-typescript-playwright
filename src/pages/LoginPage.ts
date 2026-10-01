import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomePage } from './HomePage';
import { Header } from '../components/Header';

export class LoginPage extends BasePage {
  private readonly usernameInput = '#user-name';
  private readonly passwordInput = '#password';
  private readonly loginButton = '#login-button';
  private readonly errorMessage = '[data-test="error"]';
  readonly header: Header;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
  }

  async validatePage(): Promise<void> {
    await this.page.locator(this.loginButton).waitFor({ state: 'visible' });
  }

  async open(): Promise<void> {
    await this.openPage('/');
  }

  async login(username: string, password: string): Promise<HomePage> {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);

    await expect(this.page).toHaveURL(/\/inventory\.html$/);

    return new HomePage(this.page);
  }

  async loginWithDefaultUser(): Promise<HomePage> {
    return this.login('standard_user', 'secret_sauce');
  }

  async loginWithInvalidCredentials(username: string, password: string): Promise<void> {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await this.waitForElement(this.errorMessage);
  }

  async isErrorVisible(): Promise<boolean> {
    return await this.page.locator(this.errorMessage).isVisible();
  }
}
