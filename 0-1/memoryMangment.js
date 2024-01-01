// console.log("hello this is working");
/* !stack
all premitives are stored in the stack memory
*/

let stack = "sting";

//copying the stack value to new stack
let newStck = stack;
// console.log(newStck);

/* !heap
all non premitives (Refrence types) are stored in the heap memory
*/

let newUser = {
  name: "user1",
  age: 10,
};

//assigning the refrence of user 1 to new user
let newUser2 = newUser;
console.log(newUser2.name);

newUser2.name = "user2";
console.log(newUser2.name);
//loging user 1 name
console.log(newUser.name);
