// Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    return `Net Salary: $${((baseSalary + bonus) - (baseSalary * taxRate)).toFixed(2)}`
}

console.log(calculateSalary(5000, 500, 0.1))
console.log(calculateSalary(7000, 1000, 0.15))
