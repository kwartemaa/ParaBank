import type { Page, Locator } from '@playwright/test';

export class HomePage {
  private readonly firstNameField : Locator;
  private readonly lastNameField : Locator;
  private readonly addressField : Locator;
  private readonly cityField : Locator; 
  private readonly stateField : Locator;
  private readonly zipCodeField : Locator;
  private readonly phoneNumberField : Locator;
  private readonly SSNField : Locator;
  private readonly userNameField : Locator;
  private readonly passwordField : Locator;
  private readonly passwordConfirmField : Locator;
  private readonly registerButton: Locator;


  constructor(public readonly page: Page) {
    this.firstNameField = this.page.getByTestId('input[id="customer.firstName"]');
    this.lastNameField = this.page.locator('input[id="customer.lastName"]');
    this.addressField = this.page.locator('input[id="customer.address.street"]')
    this.cityField = this.page.locator('input[id="customer.address.city"]')
    this.stateField = this.page.locator('input[id="customer.address.state"]')
    this.zipCodeField = this.page.locator('input[id="customer.address.zipCode"]')
    this.phoneNumberField = this.page.locator('input[id="customer.phoneNumber"]')
    this.SSNField = this.page.locator('input[id="customer.ssn"]')
    this.userNameField = this.page.locator('input[id="customer.username"]')
    this.passwordField = this.page.locator('input[id="customer.password"]')
    this.passwordConfirmField = this.page.locator('input[id="repeatedPassword"]')
    this.registerButton = this.page.locator('input[value="Register"]')
}  

  async enterNames(firstName: string, lastName: string) {
    await this.firstNameField.fill(firstName)
    await this.lastNameField.fill(lastName)    
    }


    async enterAddressDetails(street: string, city: string, state: string, zipCode: string ) {
        await this.addressField.fill(street) 
        await this.cityField.fill(city)
        await this.stateField.fill(state)
        await this.zipCodeField.fill(zipCode)  
        }

    
    async enterPersonalNumbers(phoneNumber: string, SSN: string){
        await this.phoneNumberField.fill(phoneNumber)
        await this.SSNField.fill(SSN)
    }

    async enterAccessDetails(username: string, password: string){
        await this.userNameField.fill(username)
        await this.passwordField.fill(password)
        await this.passwordConfirmField.fill(password)
    }

    async clickOnRegisterButton(){
        await this.registerButton.click()
    }
  }
