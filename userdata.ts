import { faker } from '@faker-js/faker';

export const users = {
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName(),
                        address: faker.location.streetAddress(),
                        city: faker.location.city(),
                        state: faker.location.state(),
                        zipCode: faker.location.zipCode(),
                        phoneNumber: faker.phone.number(),
                        SSN : "11111111111111",
                        country: faker.location.country(),
                        usernameMobile: faker.string.alphanumeric({ length: { min: 8, max: 15 } }) ,
                        usernameDesktop:faker.string.alphanumeric({ length: { min: 8, max: 15 } }),
                        password : "123456aA_"
    
                    }