# Spoon-fed OOP with TypeScript + Playwright

This project is designed to help you learn Object-Oriented Programming (OOP) concepts by building small Playwright automation examples in TypeScript.

## What you will learn

- Classes
- Objects
- Encapsulation
- Inheritance
- Abstraction
- Polymorphism
- Page Object Model (POM)
- Reusable automation code

## Project goals

This repo teaches OOP in a very simple way:

1. Create a page class for each UI page.
2. Reuse common actions in a base class.
3. Keep selectors and logic inside classes.
4. Make tests easier to read and maintain.

## Tech stack

- TypeScript
- Playwright
- Page Object Model design

## Folder structure

```text
src/
  pages/
    BasePage.ts
    LoginPage.ts
    HomePage.ts
    CartPage.ts
    CheckoutPage.ts
  tests/
    login.spec.ts
    purchase.spec.ts
```

## Install dependencies

```bash
npm install
```

## Run tests

```bash
npm test
```

## Run a single test file

```bash
npx playwright test src/tests/purchase.spec.ts
```

## Run tests in headed mode

```bash
npm run test:headed
```

## Recommended learning flow

1. Read `src/pages/BasePage.ts`
2. Read `src/pages/LoginPage.ts`
3. Read `src/pages/HomePage.ts`
4. Read `src/pages/CartPage.ts`
5. Read `src/pages/CheckoutPage.ts`
6. Run `src/tests/purchase.spec.ts`
7. Change the code and try your own examples

## Lesson 2: Cart and checkout flow

The project now includes a real purchase flow:

- login
- add product to cart
- open cart
- click checkout
- fill personal details
- complete order

This is a better example of OOP because each page has its own responsibility.

## Example learning idea

Try creating these extra classes:

- `Navbar`
- `ProductCard`
- `CheckoutOverviewPage`
- `AccountPage`

Then reuse them in tests.

## Helpful note

This project uses SauceDemo for demo automation. It is a good simple website for learning automation patterns without complicated setup.

## Next steps

Once you are comfortable, try:

- CSS selectors
- XPath
- Test data management
- Custom utility classes
- Reporting and screenshots
