import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestDataProvider } from '../data/TestDataProvider';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Real framework design with reusable components', () => {
  test('login and add products using reusable components', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.validatePage();

    const homePage = await loginPage.login(
      TestDataProvider.VALID_USER.username,
      TestDataProvider.VALID_USER.password,
    );
    await homePage.validatePage();

    const products = await homePage.getAllProducts();
    expect(products.length).toBeGreaterThan(0);

    await products[0].addToCart();
    await products[1].addToCart();

    expect(await homePage.header.getCartItemCount()).toBe(2);

    await homePage.header.clickCart();

    const cartPage = new CartPage(page);
    await cartPage.validatePage();
    expect(await cartPage.getItemCount()).toBeGreaterThan(0);

    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.validatePage();
    await checkoutPage.fillPersonalInfo(
      TestDataProvider.VALID_USER.firstName,
      TestDataProvider.VALID_USER.lastName,
      TestDataProvider.VALID_USER.postalCode,
    );
    await checkoutPage.continueToOverview();
    await checkoutPage.finishOrder();

    expect(await checkoutPage.isOrderPlaced()).toBeTruthy();
  });

  test('invalid login should show error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.validatePage();

    await loginPage.loginWithInvalidCredentials(
      TestDataProvider.INVALID_USER.username,
      TestDataProvider.INVALID_USER.password,
    );

    expect(await loginPage.isErrorVisible()).toBeTruthy();
  });
});
