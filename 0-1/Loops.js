//for of loop

const arr = [1, 2, 3, 4, 5, 6];

for (const i of arr) {
  //   console.log(i);
}

//MAPS

const map = new Map();
map.set("IN", "India");
map.set("Fr", "France");
// console.log(map);

for (const [key, value] of map) {
  // console.log(value);
}

const users = {
  name: " Aman Gairola",
  id: 233,
};

// for (const [key, value] of users) {
//   //   console.log(value); //TypeError: users is not iterable
// }

//for in loop

for (const key in users) {
  console.log(key);
}

for (const i in arr) {
  console.log(i); //log the key
  console.log(arr[i]); //log the value
}
