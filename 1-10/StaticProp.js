class user {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(this.username);
  }

  static createId() {
    return `123`;
  }
}

const user1 = new user("aman");
// console.log(user1.createId()); //trying to access static method
console.log(user.createId());

class Teacher extends user {
  constructor(usrname, email) {
    super(username);
    this.email = email;
  }
}

const user2 = new Teacher("mark", "mark.com");
console.log(user2.createId()); //cant access

//In JavaScript, the static keyword is used within a class to define static methods or properties. Static members belong to the class itself rather than to instances of the class. They are accessible directly from the class without needing to create an instance.
