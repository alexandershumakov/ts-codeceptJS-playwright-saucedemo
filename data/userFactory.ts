const {faker} = require("@faker-js/faker");


export default class User {

    firstName: string;
    lastName: string;
    zipCode: string;
    username: string;
    password: string;

    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.zipCode = faker.address.zipCode();
        this.username = "standard_user";
        this.password = "secret_sauce";
    }
}