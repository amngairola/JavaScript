//Map filter reduse

// const coding = ["js", "ruby", "py", "c", "cpp"];

// const val = coding.forEach((item) => {
//   return item;
// });

// console.log(val);

const arr = [1, 2, 3];

//filter will have a callback inside witch we will have a condition if condition ids true it willl return the value otherwise it will not return anythi

// const a = arr.filter((num) => num > 4);

// const a = arr.filter((num) => {
//   return num > 4;
// });

// console.log(a);

//semillar thing by foreach
// const num = [];
// arr.forEach((item) => {
//   if (item > 4) num.push(item);
// });

// console.log(num);

const mycode = [
  {
    languagename: "javascript",
    languageFileName: "js",
  },
  {
    languagename: "c++",
    languageFileName: "cpp",
  },
  {
    languagename: "python",
    languageFileName: "py",
  },
];

// const result = mycode.filter((i) => i.languageFileName === "py");
// console.log(result);

//## MAP
const result = arr.map((item) => item + 10);

// console.log(result);

//chaning
const newnums = arr.map((i) => i + 10).filter((j) => j > 16);
// console.log(newnums);

//## reduce

// const totel = arr.reduce((acc, curVal) => {
//   console.log(curVal, acc);
//   return acc + curVal;
// }, 2);

const totel = arr.reduce((acc, val) => acc + val, 0);
console.log(totel);
