const {faker} = require("@faker-js/faker");
const Factory = require("rosie").Factory;

export default class Product {

    firstName: string;
    lastName: string;
    zipCode: string;

    build(attrs?) {
        return new Factory()
            .attr("firstnameOfPayer", () => this.firstName =  faker.name.firstName())
            .attr("surnameOfPayer", () => this.lastName = faker.name.lastName())
            .attr("postcodeOfPayer", () => this.zipCode = faker.address.zipCode())
            .build(attrs);
    }
}







