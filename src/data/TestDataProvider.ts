export class TestDataProvider {
  static readonly VALID_USER = {
    username: 'standard_user',
    password: 'secret_sauce',
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '560001',
  };

  static readonly LOCKED_OUT_USER = {
    username: 'locked_out_user',
    password: 'secret_sauce',
  };

  static readonly INVALID_USER = {
    username: 'invalid_user',
    password: 'wrong_password',
  };

  static readonly PRODUCTS = [
    { name: 'Sauce Labs Backpack', id: 'sauce-labs-backpack' },
    { name: 'Sauce Labs Bike Light', id: 'sauce-labs-bike-light' },
    { name: 'Sauce Labs Bolt T-Shirt', id: 'sauce-labs-bolt-t-shirt' },
  ];

  static getRandomProduct() {
    return this.PRODUCTS[Math.floor(Math.random() * this.PRODUCTS.length)];
  }
}
