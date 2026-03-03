// Arrow Functions
// This is a function that was introduced in the ECMA Script 6 and they give us the latest/modern way of defining functions in a compact manner.
// At times the arrow functions can be said to be anonymous functions why? -- This is ecause they use the name of the variables they are contained in.


const sayHello = () => {
    console.log("This is an arrow function")
}
sayHello();

console.log("===================================")
// create an arrow function that is able to find the product of three numbers.
// with parameters
const product = () => {
    console.log(product(3,4,5));
}
product();

console.log("===================================")

// without parameters
const product1 = () => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
product1();