class users {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`username: ${this.username}`);
  }
}

class Teacher extends users {
  constructor(username, emil) {
    super(username);
    this.email = emil;
  }

  addCourse() {
    console.log(`${this.username}`);
  }
}

const user = new Teacher("Aman", "@aman.com");
user.addCourse();
user.logme();

const user2 = new users("Aman Gairola");
user2.logme();

//super : the super keyword is used in classes to access and call functions and properties on an object's parent (or superclass). It allows a subclass to call methods or access properties defined in its parent class.
