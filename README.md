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
- Component-based design

## Project goals

This repo teaches OOP in a very simple way:

1. Create a page class for each UI page.
2. Reuse common actions in a base class.
3. Keep selectors and logic inside classes.
4. Build reusable UI components like Header and ProductCard.
5. Centralize test data with DataProvider.
6. Make tests easier to read and maintain.

## Tech stack

- TypeScript
- Playwright
- Page Object Model design
- Component-based framework structure

## Folder structure

```text
src/
  components/
    Header.ts
    ProductCard.ts
  data/
    TestDataProvider.ts
  pages/
    BasePage.ts
    LoginPage.ts
    HomePage.ts
    CartPage.ts
    CheckoutPage.ts
  tests/
    login.spec.ts
    purchase.spec.ts
    framework.spec.ts
```

## Install dependencies

```bash
npm install
```

## Run all tests

```bash
npm test
```

## Run a single test file

```bash
npx playwright test src/tests/framework.spec.ts
```

## Recommended learning flow

1. Read `src/pages/BasePage.ts`
2. Read `src/pages/LoginPage.ts`
3. Read `src/pages/HomePage.ts`
4. Read `src/components/Header.ts`
5. Read `src/components/ProductCard.ts`
6. Read `src/data/TestDataProvider.ts`
7. Run `src/tests/framework.spec.ts`

## Core framework ideas

- `BasePage` contains shared logic for all pages
- `Header` is reusable on all pages
- `ProductCard` represents a product in the home page
- `TestDataProvider` stores reusable test data
- Each page class has its own responsibility

## Example of real framework design

This is how automation frameworks are built in many teams:

- page objects for pages
- components for reusable UI areas
- data providers for test inputs
- test files for scenarios

## Next steps

Once you are comfortable, try:

- Custom utility classes
- API testing helpers
- Reporting and screenshots
- Page factory patterns
- Domain-specific page models
