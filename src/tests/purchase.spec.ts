import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Purchase flow learning example', () => {
  test('customer can add item to cart and complete purchase', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();

    const homePage = await loginPage.loginWithDefaultUser();
    await homePage.addFirstItemToCart();

    const cartPage = new CartPage(page);
    await cartPage.open();

    expect(await cartPage.getItemCount()).toBeGreaterThan(0);
    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillPersonalInfo('John', 'Doe', '560001');
    await checkoutPage.continueToOverview();
    await checkoutPage.finishOrder();

    expect(await checkoutPage.isOrderPlaced()).toBeTruthy();
  });
});
