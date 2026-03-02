// Create a for loop that is able to print out all the leap years from 2000 to 2026
for (let year = 2000; year <= 2026; year++) {
  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year);
  }
}

//Write a for loop to print all odd numbers from 1 to 19.
for (let i = 1; i <= 19; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Largest number is:", largest);

//Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
for (let i = 1; i++;) {
    console.log("5 x" + i + " = " + (5 * i));
}

//Write a for loop to print all odd numbers from 1 to 19.
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}

//Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// From the image, the NHIF Premium Rates are categorized by gross income (Ksh) and monthly contribution (Ksh) as follows:
let income = prompt("Enter your gross income (Ksh):");
income = Number(income);

let contribution;

if (income < 6000) {
  contribution = 150;
} else if (income >= 6000 && income <= 7999) {
  contribution = 300;
} else if (income >= 8000 && income <= 11999) {
  contribution = 400;
} else if (income >= 12000 && income <= 14999) {
  contribution = 500;
} else if (income >= 15000 && income <= 19999) {
  contribution = 600;
} else if (income >= 20000 && income <= 24999) {
  contribution = 750;
} else if (income >= 25000 && income <= 29999) {
  contribution = 850;
} else if (income >= 30000 && income <= 49999) {
  contribution = 1000;
} else if (income >= 50000 && income <= 99999) {
  contribution = 1500;
} else if (income >= 100000) {
  contribution = 2000;
} else {
  contribution = "Invalid input";
}

console.log("Your NHIF monthly contribution is: Ksh " + contribution);