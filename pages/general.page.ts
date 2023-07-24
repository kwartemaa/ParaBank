import type { Page, Locator } from '@playwright/test';

export class GeneralPage {
  private readonly logo : Locator;
  private readonly logoutLink : Locator;

  constructor(public readonly page: Page) {
    this.logo = this.page.getByAltText("ParaBank");
    this.logoutLink = this.page.getByRole('link', {name: "Log Out"})
  }

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }


  async navigateHome() {
    await this.logo.click()
  }

  async logout() {
    await this.logoutLink.click()
  }
}