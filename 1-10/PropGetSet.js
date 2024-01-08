//function based
function User(email, pass) {
  this._email = email;
  this._pass = pass;

  Object.defineProperty(this, "email", {
    set: function (value) {
      this._email = value;
    },
    get: function () {
      return this._email;
    },
  });
}
const user = new User("amasm.com", "12eqwwef");
console.log(user);

//object base
const Users = {
  _email: "afaf@gmail.com",
  pas: "qqqrq",

  get email() {
    return this._email;
  },

  set email(val) {
    this._email = val;
  },
};

const aman = Object.create(Users);
console.log(aman.email);
