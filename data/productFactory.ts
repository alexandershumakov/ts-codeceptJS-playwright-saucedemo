import {Factory} from 'rosie';

export default class Product {

    name1: string;
    cost1: string;
    numberOfProducts: number;
    id: number;
    firstProduct: string;
    secondProduct: string;
    countOfProducts: string;
    countOfProducts2: string;
    name2: string;
    cost2: string;
    nameFirstProduct: string;
    nameSecondProduct: string;
    nameThirdProduct: string;
    costFirstProduct: string;
    costThirdProduct: string;
    firstProduct2: string;
    secondProduct2: string;

    build(attrs?) {
        return new Factory()
            .attr("name1", () => this.name1 = "Sauce Labs Fleece Jacket")
            .attr("cost1", () => this.cost1 = "$49.99")
            .attr("numberOfProducts", () => this.numberOfProducts = 1)
            .attr("id", () => this.id = 5)
            .attr("firstProduct", () => this.firstProduct = "Test.allTheThings() T-Shirt (Red)")
            .attr("secondProduct", () => this.secondProduct = "Sauce Labs Onesie")
            .attr("countOfProducts", () => this.countOfProducts = "2")
            .attr("countOfProducts2", () => this.countOfProducts2 = "1")
            .attr("firstProduct2", () => this.firstProduct2 = "Sauce Labs Backpack")
            .attr("secondProduct2", () => this.secondProduct2 = "Sauce Labs Bike Light")
            .attr("name2", () => this.name2 = "Sauce Labs Backpack")
            .attr("cost2", () => this.cost2 = "$29.99")
            .attr("nameFirstProduct", () => this.nameFirstProduct = "Sauce Labs Backpack")
            .attr("nameSecondProduct", () => this.nameSecondProduct = "Sauce Labs Bike Light")
            .attr("nameThirdProduct", () => this.nameThirdProduct = "Sauce Labs Bolt T-Shirt")
            .attr("costFirstProduct", () => this.costFirstProduct = "$29.99")
            .attr("costThirdProduct", () => this.costThirdProduct = "$15.99")
            .build(attrs);
    }
}





