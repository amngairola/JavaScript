//object literal
const user = {
  username: "aman",
  loginCount: 8,
  signedIn: true,
  //   getdetaild: () => console.log(`username : ${username}`),  #it will give error
  getdetaild: () => console.log(`username : ${this.username}`), //undefine , this will refer to the global contaxt
  /* 
  ----------##INTERVIEW IMPORTANT-------------------

   the this keyword behaves differently depending on the context in which it's used. In this case, the getdetaild function uses an arrow function () =>, which doesn't have its own this context. Arrow functions capture the this value from their surrounding context lexically. (## lexical scoping or lexical context refers to how variable scope is determined in a programming language)
          Therefore, in the getdetaild function, this.username refers to the this value outside of the function, which is likely the global scope. However, in this context, there's no username variable defined in the global scope. That's why this.username is undefined, leading to an error when trying to access it.

          for more details go to "../1-10/LexicalScoping.md";
  */

  getdetaild: function () {
    console.log(`username : ${this.username}`);
    // will log the username
  },
};

// console.log(user.getdetaild());

//contructor
// const promise = new Promise ();

// ----- use of this
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.LoginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  //   return this;
  //if we do not return this it will implicitly return by the compiler or java script egine
}

//-----need of constructor --------
const userOne = User("aman", 12, true);
// console.log(userOne);
const userTwo = User("Mark", 1, false);
// console.log(userOne);
// user two will overRide the properties of user one
// console.log(userTwo);

const user3 = new User("Harry", 12, true);
// console.log(userOne);
const user4 = new User("Tim", 1, false);
console.log(userOne);
console.log(user3);
console.log(user4);
