// Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " How have you been? I trust that you are good.")
}

greet("James");
greet("Joseph");


// Example 2
console.log("=====================================")
// Below is a function to find the area of a circle
const CircleArea = (pi, radius) =>{
    let area = pi * radius
    console.log("The area of the circle is: " + area + "cm\u00B2")
}
CircleArea(3.142, 7);
// come up with your own example of an arrow function that utilises 3 parameters.

const calculateFinalPrice = (price, taxRate, discountRate) => {
  const taxAmount = price * taxRate;
  const discountAmount = price * discountRate;
  return price + taxAmount - discountAmount;
};

// Example usage
const finalPrice = calculateFinalPrice(100, 0.16, 0.10);

console.log(finalPrice); 