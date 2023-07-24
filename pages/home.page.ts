import type { Page, Locator } from '@playwright/test';

export class HomePage {
  private readonly registerLink: Locator;
  private readonly usernameField: Locator;
  private readonly passwordField: Locator;
  private readonly loginButton: Locator;

  constructor(public readonly page: Page) {
    this.registerLink = this.page.locator('input.new-todo');
    this.usernameField = this.page.locator('input[name="username"]');
    this.passwordField = this.page.locator('input[name="password"]');
    this.loginButton = this.page.locator('input[value="Log In"]');
  }  

  async login() {
    await this.usernameField.fill("test1")
    await this.passwordField.fill("123456aA_")
    await this.loginButton.click()
  }

  async goToRegistrationForm(){
    await this.registerLink.click()
  }
}