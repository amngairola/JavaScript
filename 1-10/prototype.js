// let name = "Aman    ";
//  goto LNO:53
// console.log(name.truelength);  we want a trueLength funtion which wil return the true length of the string

let arr = ["thor", "spiderman"];
let heroPower = {
  thor: "Hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power: ${this.spiderman}`);
  },
};
Object.prototype.Aman = function () {
  console.log("Aman is present in all objects");
};
Array.prototype.HeyAman = function () {
  console.log("Aman is present in Arrays");
};

// heroPower.Aman();

arr.Aman();
arr.HeyAman();
// heroPower.HeyAman(); // it does not have the access of prototype function HeyAman

//prototype Inheritance
const User = {
  name: "Aman",
  email: "aman@example.com",
};
const Teacher = {
  canTeach: true,
};
const TeachingSupport = {
  isAvaliable: false,
};

const TaSupport = {
  makeAssignment: "js Assignment",
  fullTime: true,
  // The '__proto__' property is deprecated
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User; //old approach

//mordan syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Aman gairola   ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`); //{this.trim().lenth} will trim all spaces from the current context string(this) then return the length of it using .length method
};
anotherUsername.trueLength();
"Sting  ".trueLength();
"True Length ".trueLength();
