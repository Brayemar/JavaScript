// Objects Data Type:
// An object in Javascript is a data type that stores data in form of key value pairs.

let person = {
    Name : "Bernard James",
    Age  : 70,
    isRegistered : true
};

console.log("the Details of the person is: ", person)

// First method is by use of the square brackets
console.log(person["Age"])

// Second method is by use of the dot (.) notation
console.log(person.Name)

// Check the data type
console.log(typeof(person))

// Array data type:
// This refers to a collection of items that are on indexes
fruits = ["Mango", "Pineaple", "Apple", "Banana", "Melon", "Lemon", "Grapes"]

console.log("The entire array of fruits is: ", fruits)

// To access the items of ana array we use the index
console.log(fruits[3])

// You slice items of an array
console.log(fruits.slice[2, 5])