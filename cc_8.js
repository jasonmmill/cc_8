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