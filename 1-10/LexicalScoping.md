## Lexical Scoping:

# Scope Chain Resolution: Lexical scoping means that the scope of a variable is determined by its surrounding block of code during the time when the code is written, not when it's executed. When JavaScript code is parsed, the scope of variables is determined based on their location within the code structure.

# Nested Scope Hierarchy: Functions and blocks of code in JavaScript have access to variables defined in their containing (or outer) functions or blocks. This forms a hierarchy of scopes where inner scopes have access to variables in outer scopes.

### this in Regular Functions vs. Arrow Functions:

# Regular Functions: In regular functions, the value of this is dynamically scoped. It is determined by how the function is called.When a regular function is called as a method of an object, this refers to the object the method is called on.However, if the function is called without an explicit context or is not a method of an object, this defaults to the global object (in non-strict mode) or undefined (in strict mode).

# Arrow Functions:Arrow functions capture the this value from their surrounding lexical scope.Unlike regular functions, arrow functions do not have their own this context. Instead, they inherit this from the surrounding code where they are defined.As a result, arrow functions are particularly useful for maintaining the this context from the enclosing scope where they are created.

### Example:

const obj = {
regularFunc: function() {
console.log(this); // 'this' refers to obj
},
arrowFunc: () => {
console.log(this); // 'this' refers to the global object or undefined (depends on the context)
}
};

obj.regularFunc(); // 'this' in regularFunc refers to obj
obj.arrowFunc(); // 'this' in arrowFunc refers to the surrounding lexical scope (could be global or undefined)

In the context of your original code, the arrow function getdetaild inside the user object doesn't have its own this context. Therefore, this.username inside the arrow function refers to username in the outer scope (which is likely the global scope where username is not defined), resulting in undefined
