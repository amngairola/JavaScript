//# ARROW FUCNTION AND THIS KEYWORD

const user = {
  username: "Aman Gairola",
  price: 999,
  //The JavaScript this keyword refers to the current object
  welcome: function () {
    console.log(`${this.username}, welcome here`);
    console.log(this);
  },
};

// user.welcome();
user.username = "Rohit";
// user.welcome();

// console.log(this);  //will return an empty object

// function one() {
//   let user = " aman";
//   console.log(this.user); //will print undefined
// }

// one();

//#Arrow function
const one = () => {
  let user = " aman";
  console.log(this.user);
};
// one();

//#basic arrow function *explicitly return
//  const add = (num1, num2) => {
//   return num1 + num2;
// };

//#implict return
// const add = (num1, num2) => num1 + num2;

//returning object
// const add = (num1, num2) => ({ user: "aman" });

// console.log(add(1, 2));

//##Immediate invoked funciton Expressions *IIFE : is used to reduse global scope pollution

(function test() {
  //named IIFE
  console.log("DB connected");
})();

/* ----to write 2 IIFE in a single file always write ;(semicolon) after the 1st IIFE , autherise it will show some  error ---- */

((name) => {
  //Unnamed IIFE with Parameter
  console.log(`Db connected too ${name}`);
})(`aman`);
