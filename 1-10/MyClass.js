class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeusername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user = new User("Aman", "amn@gmail.com", "vssffafa");
console.log(user);

//behind the scene

function users(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeusername = function () {
  return `${this.username.toUpperCase()}`;
};

const user1 = new users("Aman Gairola", "amn@gmail.com", "vssffafa");
console.log(user1);
