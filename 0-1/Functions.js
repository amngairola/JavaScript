// creation
function hello() {
  console.log("Hello");
}

// calling
// hello();

function logInUser(username) {
  return `${username} just loged in`;
}

// console.log(logInUser("Aman")); //if we do not pass any parameter and then try to log in the result it will print undefine

//...num will work as rest operator **REST OPERATOR allows a function to take an indefinite number of arguments and bundle them in an array

/*  #WE CAN CREAT A SHOPPING CART LIKE THIS */
function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(2, 3, 4));

// #passin object as an argument
const user = {
  name: "aman",
  age: 20,
};

function HandelUser(anyObj) {
  console.log(`user name: ${anyObj.name}`);
}

HandelUser(user);
