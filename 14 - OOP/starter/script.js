'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const adolfo = new Person('Adolfo', 1995);
// const jack = new Person('Jack', 1991);
// console.log(adolfo);
// console.log(jack instanceof Person);

// 1. New empty object is created
// 2. Function is called, this points to the empty object
// 3. Newly created object is linked to prototype
// 4. Function automatically returns {}

// Prototype

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(adolfo);
// console.log(adolfo.calcAge());

// console.log(adolfo.__proto__);

// Person.prototype.species = 'Homo sapiens';
// console.log(adolfo.species, jack.species);

// console.log(adolfo.__proto__.__proto__.__proto__);

// const h1 = document.querySelector('h1');

// Challenge

// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Acc - ${this.make}'s new speed: ${this.speed}`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Brake - ${this.make}'s new speed: ${this.speed}`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car2.accelerate();
// car1.accelerate();
// car1.brake();
// car2.brake();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new CarCl('BMW', 120);
// const mercedes = new CarCl('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// mercedes.brake();

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// console.log(ford.speedUS);

// ford.speedUS = 50;
// console.log(ford);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');

// mike.introduce();

// Challenge 3

// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Acc - ${this.make}'s new speed: ${this.speed}`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Brake - ${this.make}'s new speed: ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`${this.make} charged battery up to ${chargeTo * 100}%`);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge = this.charge * 0.99;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${
//       this.charge * 100
//     }%.`
//   );
// };

// const tesla = new EV('Tesla', 120, 0.23);
// tesla.accelerate();

// console.log(tesla instanceof EV);
// console.log(tesla instanceof Car);
// console.log(tesla instanceof Object);

// tesla.brake();
// tesla.chargeBattery(0.8);

// class PersonCl {
//   constructor(fullName, birthYear) {
// //     this.fullName = fullName;
// //     this.birthYear = birthYear;
// //   }
// //   greet() {
// //     console.log(`Hey ${this.fullName}`);
// //   }

// //   get age() {
// //     return 2037 - this.birthYear;
// //   }
// //   set fullName(name) {
// //     if (name.includes(' ')) this._fullName = name;
// //     else alert(`${name} is not a full name!`);
// //   }

// //   get fullName() {
// //     return this._fullName;
// //   }

// //   static hey() {
// //     console.log('Hey there!');
// //   }
// // }

// // class StudentCl extends PersonCl {
// //   constructor(fullName, birthYear, course) {
// //     super(fullName, birthYear);
// //     this.course = course;
// //   }
// //   introduce() {
// //     console.log(`My name is ${this.fullName} and I study ${this.course}`);
// //   }
// // }

// // const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// // martha.introduce();
// // console.log(martha.age);

// class Account {
//   // public field
//   locale = navigator.language;
//   _movements = [];

//   // Private Fields

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     // this._movements = [];
//     // this.local = navigator.language;
//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }

//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved');
//     }
//   }
// }

// const acc1 = new Account('Adolfo', 'CLP', 1111);

// acc1.requestLoan(100);
// console.log(acc1);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const tesla = new EVCl('Rivian', 120, 23);
// tesla.accelerate();
// tesla.brake();
// tesla.brake();
// tesla.chargeBattery(70);
// tesla.accelerate();

tesla.accelerate().accelerate().brake().brake().accelerate();
