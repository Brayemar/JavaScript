// Anonymous Functions in Javascript.
// These are Functions that exists without a name.

//Below is an example of such functions:
// The below function shall take the name of the variable they are contained in.

const greet = function(){
    console.log("Hello there, hope ur Monday is fine...")
}

console.log(typeof(greet))
greet();


// Below is another anonymous function
(function(){
    console.log("Welcome to the world of programing...")
})();

// Read on arrow function with and without parameters.
// research on modules in Javascript.