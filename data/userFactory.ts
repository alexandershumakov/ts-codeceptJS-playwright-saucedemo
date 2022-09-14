const {faker} = require("@faker-js/faker");
const Factory = require("rosie").Factory;

export default class Product {

    firstnameOfPayer: string;
    surnameOfPayer: string;
    postcodeOfPayer: string;

    build(attrs?) {
        return new Factory()
            .attr("firstnameOfPayer", () => faker.name.firstName())
            .attr("surnameOfPayer", () => faker.name.lastName())
            .attr("postcodeOfPayer", () => faker.address.zipCode())
            .build(attrs);
    }
}





        // this.username = "standard_user";
        // this.password = "secret_sauce";

