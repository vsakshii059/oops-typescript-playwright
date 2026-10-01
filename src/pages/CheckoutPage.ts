import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  private readonly firstNameInput = '[data-test="firstName"]';
  private readonly lastNameInput = '[data-test="lastName"]';
  private readonly postalCodeInput = '[data-test="postalCode"]';
  private readonly continueButton = '[data-test="continue"]';
  private readonly finishButton = '[data-test="finish"]';
  private readonly successMessage = '.complete-header';

  constructor(page: Page) {
    super(page);
  }

  async fillPersonalInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async continueToOverview(): Promise<void> {
    await this.page.click(this.continueButton);
  }

  async finishOrder(): Promise<void> {
    await this.page.click(this.finishButton);
  }

  async isOrderPlaced(): Promise<boolean> {
    return await this.page.locator(this.successMessage).isVisible();
  }
}
