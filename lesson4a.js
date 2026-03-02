// Functions with parameters.
// Parameters are values that get passed as arguments when we invoke a function.
// They help us to create functions that canbe reusable throughout a program.


function greeting(name){
    console.log("Hello", name, "How have you been")
}

greeting("Brandon Mogikoyo")
greeting("Mungai Jane")
greeting("Brandon Mogikoyo")

console.log("===================================")
// Below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the numbers is: ", sum)
}


addition(45, 60)
console.log("======================================")

// by use of a function that accepts parameters, calculate the area of triangle whose base is 20cm and height is 12cm
function area(base, height){
    area = (base * height)/2
    console.log("The area of the triangle is: ", area ,"cm\u00B2")
}
area(20, 12)

console.log("======================================")
// Find the simple interest given the principle as 50000, rate as 5% and time 8 years.
function simpleinterest(principle, rate, time){
    multiply = principle * rate * time
    console.log("The simpleinterest is: ", multiply)
}
simpleinterest(50000, 0.05, 8)
