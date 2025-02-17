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