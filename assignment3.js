//Arrow Function Without Parameters

//If the function takes no parameters, use empty parentheses ().

//Example:
const greet = () => {
  console.log("Hello, World!");
};

greet();


// Arrow Function With One Parameter
// If there is only one parameter, parentheses are optional.
// Example:
const square = x => x * x;

console.log(square(5)); // 25


// Arrow Function With Multiple Parameters
// If there are two or more parameters, parentheses are required.
// Example:

const add = (a, b) => a + b;

console.log(add(3, 4)); // 7



// Arrow Function Returning an Object
// Wrap the object in parentheses:

const createUser = (name, age) => ({
  name: name,
  age: age
});


