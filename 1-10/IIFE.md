## IIFE stands for Immediately Invoked Function Expression.

It's a JavaScript design pattern that allows a function to be executed right after it's defined. The primary purpose of an IIFE is to create a new scope and avoid polluting the global namespace with variables.

---

## Anatomy of an IIFE:

Function Expression: An IIFE starts with a function expression. It's defined inside parentheses to distinguish it from a regular function declaration.

Immediately Invoked: The function expression is immediately invoked by adding () at the end, executing the function right after its definition.

---

Syntax:
(function() {
// Code inside this function is isolated from the outer scope
// Variables declared here won't pollute the global scope
})();

---

// Without IIFE
function regularFunc() {
console.log("Regular function");
}
regularFunc(); // Can be called anytime

// With IIFE
(function() {
console.log("IIFE executed immediately");
})(); // Executed immediately and won't be accessible after this point

// Another example with parameter passing
(function(name) {
console.log(`Hello, ${name}!`);
})("Aman"); // Output: Hello, Aman!

---

## Advantages of IIFE:

## Encapsulation: It creates a new scope, preventing variable name clashes with the global scope or other functions.Variables declared inside an IIFE are not accessible outside it, promoting data privacy.

## Avoiding Global Namespace Pollution: Since variables declared inside an IIFE are not added to the global scope, it helps in maintaining a clean global namespace.

## Immediate Execution:Useful for initializing code that needs to run immediately or setting up one-time configurations.

Isolation:Provides isolation for modules or pieces of code, allowing them to operate independently without affecting other parts of the application.

### IIFEs are commonly used in JavaScript for modular code organization, encapsulation, and to ensure a controlled scope for variables and functions.
