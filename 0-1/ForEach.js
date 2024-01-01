const coding = ["js", "ruby", "py", "c", "cpp"];

/* heigher order function  */

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((i) => {
//   console.log(i);
// });

// function print(i) {
//   console.log(i);
// }
// coding.forEach(print);

/*  for each can have 3 parameters as shown below  */
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

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

mycode.forEach((item) => {
  console.log(item.languagename); //item will behave like an object
});
