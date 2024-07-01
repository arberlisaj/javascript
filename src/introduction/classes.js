const _username = new WeakMap();
const _privateProp = Symbol();

// The parent class
class Person {
  constructor(username) {
    _username.set(this, username);
    this[_privateProp] = username;
  }
  get username() {
    return _username.get(this);
  }
  set username(value) {
    return _username.set(this, value);
  }
  introduce() {
    console.log(`I am ${this.username}`);
  }
  static walk() {
    console.log("walking...");
  }
}

// Teacher inherits from the Person class
class Teacher extends Person {
  constructor(username) {
    super(username);
  }
  introduce() {
    console.log(`I am professor ${this.username}`);
  }
}

// Student inherits from the Person class
class Student extends Person {
  constructor(username) {
    super(username);
  }
  introduce() {
    console.log(`I am ${this.username}`);
  }
}

// Create instances
const teacher = new Teacher("Jane Doe");
const student = new Student("Arber Lisaj");
const person = new Person("J.K Rowling");
person.username = "Ernest Hemingway";

// Access private property
const privateProp = Object.getOwnPropertySymbols(person)[0];
console.log(person[privateProp]);

// Access the static method of the Person class
Person.walk();

// Polymorphism
for (let entity of [teacher, student, person]) {
  entity.introduce();
}
