// Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) { // create function and parameters
    return `Net Salary: $${((baseSalary + bonus) - (baseSalary * taxRate)).toFixed(2)}` // net salary formula and cap at 2 decimal places
}

console.log(calculateSalary(5000, 500, 0.1)) // log results for different outcomes
console.log(calculateSalary(7000, 1000, 0.15))

// Task 2: Function Expression
function calculateDiscount(price, discountRate) { // create function and parameters
    return `Final Price: $${(price - (price * discountRate)).toFixed(2)}` // final price formula and cap at 2 decimal places
}

console.log(calculateDiscount(100, 0.2)) // log results for different outcomes
console.log(calculateDiscount(250, 0.15))

// Task 3: Arrow Function
let calculateServiceFee = (amount, serviceType) => { // arrow function and parameters established
    if (serviceType === "Premium") {
        return `Service Fee: $${(amount * 0.15).toFixed(2)}` // scenario if premium service
    }
    if (serviceType === "Standard") {
    return `Service Fee: $${(amount * 0.10).toFixed(2)}` // scenario if standard service
    }
    if (serviceType === "Basic") {
    return `Service Fee: $${(amount * 0.05).toFixed(2)}` // scenario if basic service
}
}
console.log(calculateServiceFee(200, "Premium")) // log results for different outcomes
console.log(calculateServiceFee(500, "Standard"))

// Task 4: Parameters & Arguments
function calculateRentalCost(days, carType, insurance = false) { // create function and add parameters. take not of insurance's default value 
    if (carType === "Economy" && insurance) { // scenario for economy car and insurance
        return `Total Rental Cost: $${((40 * days) + (20 * days)).toFixed(2)}`
    }
    if (carType === "Economy") { // scenario for economy car and no insurance
        return `Total Rental Cost: $${((40 * days)).toFixed(2)}`
    }
    if (carType === "Standard" && insurance) { // scenario for standard car and insurance
        return `Total Rental Cost: $${((60 * days) + (20 * days)).toFixed(2)}`
    }
    if (carType === "Standard") { // scenario for standard car and no insurance
        return `Total Rental Cost: $${((60 * days)).toFixed(2)}`
    }
    if (carType === "Luxury" && insurance) { // scenario for luxury car and insurance
        return `Total Rental Cost: $${((100 * days) + (20 * days)).toFixed(2)}`
    }
    if (carType === "Luxury") { // scenario for luxury car and no insurance
        return `Total Rental Cost: $${((100 * days)).toFixed(2)}`
}
}
console.log(calculateRentalCost(3, "Economy", true)) // log results for different outcomes
console.log(calculateRentalCost(5, "Luxury", false))

// Task 5: Returning Values
function calculateLoanPayment(principal, rate, time) { // function and parameters
    return `Total Payment: $${(principal + (principal * rate * time)).toFixed(2)}` // payment formula and cap at 2 decimal places
}

console.log(calculateLoanPayment(1000, 0.05, 2)) // log results for different outcomes
console.log(calculateLoanPayment(5000, 0.07, 3))

// Task 6: Higher Order Functions
let transactions = [ 200, 1500, 3200, 800, 2500 ] // array declaration

function filterLargeTransactions(transactions, filterFunction) { // higher order function with parameters
    return transactions.filter(transaction => filterFunction(transaction)) // uses parameters to filter based on filterFunction
}
console.log(filterLargeTransactions(transactions, amount => amount > 1000)) // log results 

// Task 7: Closures
function createCartTracker() { // create function with no parameters
    let total = 0 // establish initial running total as 0
    return function(amount) { // call another function with a new parameter "amount"
        return `Total Cart Value: $${(total += amount).toFixed(2)}` // formula to add to running cart total
    }
}
let cart = createCartTracker() // output based on assignment

console.log(cart(20)) // log results for different outcomes 
console.log(cart(35))

// Task 8: Recursion in JavaScript
function calculateSavings(years, amount) { // establish function and parameters
    if (years >= 10) return amount; // cap recursive function at 10 years
    amount *= 1.05 // savings rate
    return calculateSavings(years + 1, amount) // recursion
}

console.log(`Projected Savings: $${(calculateSavings(8, 1000)).toFixed(2)}`) // log results for different outcomes
console.log(`Projected Savings: $${(calculateSavings(5, 5000)).toFixed(2)}`)