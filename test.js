// Example of a callback function
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

// Pass sayGoodbye as a callback function
greet('Alice', sayGoodbye); 
// Output:
// Hello Alice
// Goodbye!



