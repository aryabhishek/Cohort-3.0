interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    street: string;
  };
  greet(): string;
}

class Empolyee implements Person {
  name: string;
  age: number;
  address: {
    city: string;
    street: string;
  };

  /**
   * Creates an instance of a class with the specified name, age, and address.
   *
   * @param name - The name of the person.
   * @param age - The age of the person.
   * @param address - The address of the person.
   * @param address.city - The city where the person lives.
   * @param address.street - The street where the person lives.
   */
  constructor(
    name: string,
    age: number,
    address: { city: string; street: string }
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  greet() {
    return `Hello, my name is ${this.name}\nI am ${this.age} years old\nI live in ${this.address.city}, ${this.address.street}`;
  }
}

let emp: Empolyee = new Empolyee("John", 30, {
  city: "New York",
  street: "5th Ave",
});
console.log(emp.greet());

// Pick lets us pick the properties we want to use from an interface or type.
type UserProfile = Pick<Person, "name" | "age">;
let userProfile: UserProfile = { name: "John", age: 30 };
