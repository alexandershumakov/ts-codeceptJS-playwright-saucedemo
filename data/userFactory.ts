const {faker} = require("@faker-js/faker");


export default class User {

    firstName: string;
    lastName: string;
    zipCode: string;

    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.zipCode = faker.address.zipCode();
    }
}