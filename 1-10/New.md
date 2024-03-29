In JavaScript, the new keyword is used to create instances of objects from constructor functions. When you create objects using new, it follows a process known as instantiation, where you create a new instance of a defined object type (constructor function).

## Description

When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

1: Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.

2: Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].

## Note: Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.

3: Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).

4: If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)
