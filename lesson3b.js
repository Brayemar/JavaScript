// While Loop
// Bellow is a simple syntax of the while loop
// 1. Initialization of a variable
// 2. While keyword
// 3. Condition to be created to be checked
// 4. Body of the while loop
// 5. increment/decrement


let i = 0;
while (i <= 10) {
    console.log("The new value of i is: ", i)
    i++;
}

console.log("==================================")

//come up with a js example of a map loop

const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]

// it creates a new array
let number =[1,2,3,4,5];
let squares =number.map(num => num**2);
console.log(squares)

// Check the tasks on page 30 of the book
