import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('OOP learning examples with Playwright', () => {
  test('login page should allow a valid user to sign in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    const homePage = await loginPage.loginWithDefaultUser();

    await homePage.validateLandingPage();
    await expect(await homePage.getPageHeading()).toBe('Products');
  });

  test('login page should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.loginWithInvalidCredentials('locked_out_user', 'wrong_password');

    await expect(await loginPage.isErrorVisible()).toBeTruthy();
  });
});
