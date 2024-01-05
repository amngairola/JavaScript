## Arrow Functions:

## Purpose: Arrow functions provide a concise syntax for writing functions in JavaScript.

## Syntax:

const func = (param1, param2) => {
// function body
};
Advantages:Shorter syntax compared to regular functions.
Automatically captures the surrounding this value.

---

## Map:

Purpose: The map method creates a new array by applying a function to every element in an existing array.

## Usage:

const newArray = oldArray.map((element) => {
return transformedElement;
});

## Key Points:

Returns a new array with modified elements.
Does not change the original array.

---

## Filter:

## Purpose: The filter method creates a new array with elements that pass a certain condition.

## Usage:

const filteredArray = array.filter((element) => {
return condition;
});

## Key Points:

Returns a new array with elements that satisfy the condition.
Does not modify the original array.

---

## Reduce:

## Purpose: The reduce method executes a reducer function on each element of the array, resulting in a single output value.

## Usage:

const result = array.reduce((accumulator, currentValue) => {
return modifiedAccumulator;
}, initialValue);

## Key Points:

Iterates through the array and accumulates a single value.
Takes an optional initial value for the accumulator.

---

## forEach:

## Purpose: The forEach method executes a provided function once for each array element.

## Usage:

array.forEach((element) => {
// Do something with each element
});

## Key Points:

Executes a function for each element but doesn’t create a new array.
Mainly used for side effects like logging or updating elements.

---

## for...of Loop:

## Purpose: The for...of loop iterates over iterable objects like arrays, strings, maps, sets, etc.

## Usage:

for (const element of iterable) {
// Do something with element
}

## Key Points:

Iterates over values of an iterable.
Simpler and cleaner syntax compared to traditional for loops.

---

## for...in Loop:

## Purpose: The for...in loop iterates over the enumerable properties of an object.

## Usage:

for (const property in object) {
// Do something with object[property]
}

## Key Points:

Loops through object properties, including inherited ones.
Mostly used for iterating over object keys.
