function sum(value) {
  return (value += 5);
}
sum.power = 2;
// console.log(sum(5));
// console.log(sum.power);
// console.log(sum.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//we can add new properties to the object using .prototype , shown in below example
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.print = function () {
  console.log(`score = ${this.score}`);
};

// const u1 = createUser("User1", 10);
//u1.print();  -----TypeError: Cannot read properties of undefined (reading 'print')  , here we need to tell u1 that you have explicit properties (increment , print) ,which we can do with the new keyword

const u1 = new createUser("User1", 10);
const u2 = createUser("User2", 20);

u1.print();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
