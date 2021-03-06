/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.stomach = attributes.stomach;
  this.food = attributes.food;
}

Person.prototype.eat = function () {
  this.stomach.push(this.food);
  if (this.stomach.length >= 10) {
    this.stomach.length = 0;
  }
  return `${this.name} likes ${this.food}`;
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const p1 = new Person({
  name: "Abbot",
  age: 46,
  stomach: [],
  food: "hamburgers"
});

// console.log(`${p1.name} likes to eat ${p1.food}`);

// Class (optional)

class User {

  constructor(attributes) { // the function that acutally constructs or creates our objects
    this.name = attributes.name;
    this.age = attributes.age;
    this.stomach = attributes.stomach;
    this.food = attributes.food;      
  }

  eat() {
    this.stomach.push(this.food);
    if (this.stomach.length >= 10) {
      this.stomach.length = 0;
    }
    return `${this.name} likes ${this.food}`;
  };

  toString() {
    return `${this.name} is logged in.`
  }
}

class Admin extends User {
  deleteUser(user) {
      users = users.filter( u => {
          return u.name != user.name
      })
  }
}

const user1 = new Person({
  name: "Abbot",
  age: 46,
  stomach: [],
  food: "hamburgers"
});

const user2 = new Person({
  name: "Bob",
  age: 32,
  stomach: [],
  food: "pizza"
});

let admin = new Admin('Cisco');

let users = [user1, user2];
console.log(users);
admin.deleteUser(user1);
console.log(users);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(attributes) {
  this.model = attributes.model;
  this.mpg = attributes.milesPerGallon;
  this.odometer = attributes.odometer;
}

Car.prototype.fill = function (gallons) {
  this.tank = gallons;
  return `At fillup, the amount of gas available is ${this.tank}`;
};

Car.prototype.drive = function (distance) {
  this.distance = distance;
  this.odometer += distance;
  this.gallonsUsed = distance / this.mpg;
  this.tank -= this.gallonsUsed;
  if (this.tank === 0) {
    console.log(`You ran out of gas at odometer reading of ${this.odometer}`);
  }
};

Car.prototype.getStatus = function () {
  return `The car was driven ${this.distance}, used ${
    this.gallonsUsed
  } gallons and has ${this.tank} gallons left.`;
};

const car1 = new Car({
  model: "Volvo",
  milesPerGallon: 16,
  tank: 0,
  odometer: 0,
  distance: 0,
  gallons: 0
});

// console.log(car1.fill(10));
// car1.drive(160);
// console.log(car1.getStatus());
// console.log(car1.fill(10));
// car1.drive(160);
// console.log(car1.getStatus());


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(attributes) {
  Person.call(this, attributes);
  this.favoriteToy = attributes.favoriteToy;
  this.name = attributes.name;
}

Baby.prototype.play = function () {
  return `${baby1.name} likes to play with ${baby1.favoriteToy}s`;
};

const baby1 = new Baby({
  name: "Junior",
  age: 2,
  stomach: [],
  food: "milk",
  favoriteToy: "guitar"
});

console.log(baby1.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. 'this' word is a pronoun to use in place of the object it's relating to
  2. The keyword relates to where and when the function is called
  3. 'this' keyword gives an object's context
  4. 'this' is bound to a specific instance 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
