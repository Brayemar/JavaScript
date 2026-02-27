// Ask user for distance
let distance = 1050
let amount;

// Check distance range
if (distance >= 0 && distance <= 100) {
    amount = 5;
} else if (distance >= 101 && distance <= 500) {
    amount = 10;
} else if (distance >= 501 && distance <= 1000) {
    amount = 20;
} else if (distance >= 1001) {
    amount = 40;
} else {
    console.log("Invalid distance entered.");
}

// Display result
if (amount !== undefined) {
    console.log("Amount to pay: $" + amount);
}
