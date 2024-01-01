//object litrals
const mysym = Symbol("key1"); //defining a symbol
const obj = {
  name: "objectName",
  "type of": "string",
  [mysym]: "myKey1", //adding a symbol
  email: "@google.com",
};

// console.log(obj.name);
//squre notation for accessin object propeties
// console.log(obj["name"]);
// console.log(obj["type of"]);
// console.log(obj[mysym]); //accesing a symbol
obj.email = "@ms.com";
// Object.freeze(obj); //freezing the object (unchanged)
obj.email = "google.com";
// console.log(obj);

// ------------------

const tinderUser = {};
(tinderUser.name = "user1"), (tinderUser.if = "123abc");
tinderUser.isLogin = false;

// console.log(tinderUser);

const regularUser = {
  email: " @afa",
  FullName: {
    FirstName: "Aman",
    LastName: " Gairola",
  },
};

// console.log(regularUser.FullName);

//merging object

const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };

// const obj3 = {obj1 , obj2};
// console.log(obj3);

const obj3 = Object.assign(
  {
    /* target */
  },
  /* sources */
  obj2,
  obj1
);
console.log(obj3);

//using spred operator
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
