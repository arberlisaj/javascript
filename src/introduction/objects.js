// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      return "draw";
    },
  };
}

// Constructor function
function Circle(radius) {
  this.radius = radius;
  let circumference = 2 * 3.14 * radius;
  // Define a getter/setter
  Object.defineProperty(this, "circumference", {
    get: function() {
      return circumference.toFixed(2);
    },
    set: function(value) {
      circumference = value;
    },
  });
}

const circle = new Circle(10);
for (let key in circle) console.log(key, circle[key]);
if ("location" in circle) return true;
// Return an array of keys
const keys = Object.keys(circle); 

// Function constructor
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  `,
);

// Mixin
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: () => "eat",
};

const canWalk = {
  walk: () => "walk",
};

function Person() { }
mixin(Person.prototype, canWalk, canEat);

// OOP
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Circle, Shape);

function Rectangle(width, length, color) {
  Shape.call(this, color);
  this.width = width;
  this.length = length;
}
extend(Rectangle, Shape);

Shape.prototype.draw = function() {
  return "og draw function";
};

Circle.prototype.draw = function() {
  return "method overriding";
};

const shapes = [new Circle(5, "red"), new Rectangle(10, 4, "blue")];
for (let shape of shapes) {
  shape.draw();
}

// Prototypes 
const BankAccount = function() {
  this.withdraw = function() {
    console.log(this);
  };
};

const c = new BankAccount();
c.withdraw(); // circle object
const withdraw = c.withdraw;
withdraw(); // window object

// Get the prototype of an object
const obj = {};
Object.getPrototypeOf(obj);

// Get the attributes of a property
Object.getOwnPropertyDescriptor(obj, "propertyName");

// Set the attributes for a property:
Object.defineProperty(obj, "propertyName", {
  configurable: false, // cannot be deleted
  writable: false,
  enumerable: false,
});

Object.prototype === Object.getPrototypeOf({});
Array.prototype === Object.getPrototypeOf([]);

// A single instance of this prototype will be stored in the memory.
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // true

// When dealing with large number of objects, it's better to put their methods on their prototype.
// This way, a single instance of the methods will be in the memory.
BankAccount.prototype.withdraw = function() { };

// To get all the properties (own + prototype):
for (let key in obj) {
}
