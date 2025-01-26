// Task 1 - Employee Information

let employeeName = "Yazmin Hue"
const employeeID = 34904
var isActive = true

console.log("Employee Name:", employeeName, "- Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "- Type:", typeof employeeID);
console.log("Is Active:", isActive, "- Type:", typeof isActive);

// Task 2 - Product Details

let productName = "Strawberry Matcha"
const productPrice = 10.99
var isAvailable = true

console.log("Product Name:", productName, "- Type:", typeof productName);
console.log("Product Price:", productPrice, "- Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "- Type:", typeof isAvailable);

// Task 3 - Financial Transactions

let accountBalance = 50; // starting balance
accountBalance -= 10.99;  // subtract the cost of the ceremonial grade match ($10.99)
console.log("Updated Account Balance after purchase and deposit:", accountBalance);

// Task 4 - Customer Messaging

let customerName = "Lili"; // Assign customer's name
let welcomeMessage = "Hello, " + customerName + "! Welcome to our store."; // Concatenate message
console.log(welcomeMessage); // Log the message to the console

// Task 5 - Access Control

let isLoggedIn = true;
let hasAccess = isLoggedIn && true; // Logical AND
let canEdit = isLoggedIn || false;  // Logical OR

console.log("User Logged In:", isLoggedIn);
console.log("Has Access:", hasAccess);
console.log("Access Denied : User not found." );