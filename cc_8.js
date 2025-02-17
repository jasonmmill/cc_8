// Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    return `Net Salary: $${((baseSalary + bonus) - (baseSalary * taxRate)).toFixed(2)}`
}

console.log(calculateSalary(5000, 500, 0.1))
console.log(calculateSalary(7000, 1000, 0.15))

// Task 2: Function Expression
function calculateDiscount(price, discountRate) {
    return `Final Price: $${(price - (price * discountRate)).toFixed(2)}`
}

console.log(calculateDiscount(100, 0.2))
console.log(calculateDiscount(250, 0.15))

// Task 3: Arrow Function
let calculateServiceFee = (amount, serviceType) => {
    if (serviceType === "Premium") {
        return `Service Fee: $${(amount * 0.15).toFixed(2)}`
    }
    if (serviceType === "Standard") {
    return `Service Fee: $${(amount * 0.10).toFixed(2)}`
    }
    if (serviceType === "Basic") {
    return `Service Fee: $${(amount * 0.05).toFixed(2)}`
}
}
console.log(calculateServiceFee(200, "Premium"))
console.log(calculateServiceFee(500, "Standard"))

// Task 4: Parameters & Arguments
function calculateRentalCost(days, carType, insurance = false) {
    if (carType === "Economy" && insurance) {
        return `Total Rental Cost: $${((40 * days) + (20 * days)).toFixed(2)}`
    }
    if (carType === "Economy") {
        return `Total Rental Cost: $${((40 * days)).toFixed(2)}`
    }
    if (carType === "Standard" && insurance) {
        return `Total Rental Cost: $${((60 * days) + (20 * days)).toFixed(2)}`
    }
    if (carType === "Standard") {
        return `Total Rental Cost: $${((60 * days)).toFixed(2)}`
    }
    if (carType === "Luxury" && insurance) {
        return `Total Rental Cost: $${((100 * days) + (20 * days)).toFixed(2)}`
    }
    if (carType === "Luxury") {
        return `Total Rental Cost: $${((100 * days)).toFixed(2)}`
}
}
console.log(calculateRentalCost(3, "Economy", true))
console.log(calculateRentalCost(5, "Luxury", false))

// Task 5: Returning Values
function calculateLoanPayment(principal, rate, time) {
    return `Total Payment: $${(principal + (principal * rate * time)).toFixed(2)}`
}

console.log(calculateLoanPayment(1000, 0.05, 2))
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
        return `Current Balance: $${(total += amount).toFixed(2)}` // formula to add to running cart total
    }
}
let cart = createCartTracker() // output based on assignment

console.log(cart(20)) // log results for different outcomes 
console.log(cart(35))