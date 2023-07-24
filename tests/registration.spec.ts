import { test, expect } from "../fixtures/basePage";
import { users } from "../userdata";

test.beforeEach( async ({generalPage, homePage})=>{
    await generalPage.goto()
    await homePage.goToRegistrationForm()
})

test("Register with valid credentials", async({registerPage, page})=>{
    await registerPage.enterNames(users.firstName, users.lastName)
    await registerPage.enterAddressDetails(users.address, users.city, users.state, users.zipCode)
    await registerPage.enterPersonalNumbers(users.phoneNumber, users.SSN)
    await registerPage.enterAccessDetails(users.usernameDesktop, users.password)
    await registerPage.clickOnRegisterButton()
    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm")
    await expect(page.getByText("Your account was created successfully. You are now logged in.", {exact:true})).toBeVisible()
    await expect(page.getByText(`Welcome ${users.usernameDesktop}`)).toBeVisible()
})

