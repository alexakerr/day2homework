// Lesson Two - Problem One
// Task One
let isLoggedIn = false; // false bc the user is not already logged in

function addToCart(item) {
    if (isLoggedIn) {
        console.log(`"${item}" was added to your cart!`);
    } else {
        console.log("Please log in before adding items to the cart.");
    }
}

// Lesson Two - Problem Two
// Task One
let accountBalance = 0; // the balance starts at zero

function deposit(amount) {
    if (amount > 0) { // if the amount is greater than zero then...
        accountBalance += amount; // add the amount to the account balance aka zero
        console.log(`Deposit successful. Your new balance is: $${accountBalance}`);
    } else {
        console.log("Invalid deposit amount. Please enter a positive number.");
    }
}

// Task Two
let accountBalance = 100; // person is starting with $100

function withdraw(amount) {
    if (amount > 0) { //again the amount being withdrawn needs to be greater than zero 
        if (amount <= accountBalance) {  
            accountBalance -= amount; //subtracting the amount from the balance
            console.log(`Withdrawal successful. New balance: $${accountBalance}`);
        } else {
            console.log("Insufficient funds. Cannot withdraw more than the available balance.");
        }
    } else {
        console.log("Invalid withdrawal amount. Please enter a positive number.");
    }
}


// Task Three
let accountBalance = 100; 

function checkBalance() {
    console.log(`Current balance: $${accountBalance}`);
}
checkBalance(); 



