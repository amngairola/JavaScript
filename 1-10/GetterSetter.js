class User {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }
  set pass(val) {
    this._pass = val;
  }

  get pass() {
    return `${this._pass}__`;
  }
}

const Aman = new User("am@.com", "1qwr324");
console.log(Aman);
