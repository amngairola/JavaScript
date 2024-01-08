//call -- It allows you to invoke a function while specifying the value of this explicitly and passing arguments individually.
//syntax: functionName.call(thisArg, arg1, arg2, ...);
function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, pass) {
  //SetUsername(username);  //--This line tries to call SetUsername without specifying the object, which might not work as intended,  the setUsername function defined without any context or explicit object reference ,which means it won't automatically know which object's username property it should set. { email: 'example@.com', pass: '123' }

  SetUsername.call(this, username); // now we passing the current objeccts context(this) to the setUsername function, This line correctly sets the username property on the current object using 'call'

  this.email = email;
  this.pass = pass;
}
//
const User = new createUser("Aman", "example@.com", "123");

console.log(User);
// const user = new SetUsername("Mark");  ---now it know which object's username property it should set, because we are passing current object context to the setUsername funtion
// console.log(user); --------SetUsername { username: 'Abm' }
