const des = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(des);

// const obj = Object.create(null);

const obj = {
  name: "Aman",
  package: `10.8 LPA`,
  isAvaileble: false,

  callAman: function () {
    console.log("can not connect");
  },
};

console.log(Object.getOwnPropertyDescriptor(obj, "package"));

Object.defineProperty(obj, "package", {
  //writable: true,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(obj, "package"));

// obj.package = `20LPA`;
// console.log(obj);

for (let [key, value] of Object.entries(obj)) {
  if (typeof value !== "function") {
    console.log(`${key} , ${value}`);
  }
}
