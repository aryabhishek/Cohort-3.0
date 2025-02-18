"use strict";
class Empolyee {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    greet() {
        return `Hello, my name is ${this.name}\nI am ${this.age} years old\nI live in ${this.address.city}, ${this.address.street}`;
    }
}
let emp = new Empolyee("John", 30, { city: "New York", street: "5th Ave" });
console.log(emp.greet());
