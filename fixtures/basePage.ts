import { test as base } from '@playwright/test';
import { GeneralPage } from '../pages/general.page';
import { HomePage } from '../pages/home.page';
import { RegisterPage } from '../pages/register.page';


// Declare the types of your fixtures.
type MyFixtures = {
  generalPage: GeneralPage;
  homePage: HomePage;
  registerPage: RegisterPage;
};


export const test = base.extend<MyFixtures>({
  generalPage: async ({ page }, use) => {
    const generalPage = new GeneralPage(page);
    await use(generalPage);

  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },


});
export { expect } from '@playwright/test';