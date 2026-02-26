// String Data Type
// A String is a series of /sequence of characters enclosed inside of quotation marks.
let name = "Brandon Mogikoyo"
console.log("The name is: ", name)

// floating point : This is a number with decimal
let quantity = 35.5
console.log("The quantity of sugar bought is: ",quantity)
console.log(typeof(quantity))

//Boolean : It returns true or false
let isAdult = true
let isRegistered = false
console.log("Is James an Adult? ", isAdult)
console.log("Is he a registered as a voter? ", isRegistered)


//undefined: This is a data type that has been declared but theres no value that has been assigned to it.
let county;
console.log("The county is: ", county)


//null data type: It is a data type that contains null values
let username = nullconsole.log("What is the username? ", username)
// Assignment research and come up with examples on Object and Array data types. Show how to access items of the object and of an array.


          //OBJECT DATA TYPE
// An object is a collection of related data stored as key–value pairs.
// Keys (also called properties) are strings.
// Values can be any data type (string, number, array, object, function, etc.).
// Think of an object as a real-world entity with attributes.
 
// Example
let student = {
  name: "Alice",
  age: 20,
  course: "Computer Science",
  isEnrolled: true
};
console.log(student.name);     // Alice
console.log(student.age);      // 20


       // ARRAY DATA TYPE
// An array is a special object used to store multiple values in a single variable.
// Items are stored in order.
// Each item has an index (starting from 0).


//Example
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits[0]);   // Apple
console.log(fruits[2]);   // Mango