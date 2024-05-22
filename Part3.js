"use strict";
// Part-3:
// Array with tuples and indexing - Employee Salaries:
Object.defineProperty(exports, "__esModule", { value: true });
// Step 2: Create the array of employees
let employees = [
    {
        name: "Parizah Shaikh",
        hoursWorked: 20,
        hourlyRate: 500,
        salary: 5000
    },
    {
        name: "sania",
        hoursWorked: 10,
        hourlyRate: 600,
        salary: 6000
    },
    {
        name: "Hania",
        hoursWorked: 20,
        hourlyRate: 800,
        salary: 16000
    }
];
// Step 3: Implement the calculateSalary function
function calculateSalary(employees) {
    employees.salary = employees.hoursWorked * employees.hourlyRate;
    // Apply a 10% bonus if the employee worked 20 hours or more
    if (employees.hoursWorked >= 20) {
        employees.salary += employees.salary * 0.1;
    }
}
// Step 4: Calculate salaries for all employees and apply bonuses
employees.forEach(employees => {
    calculateSalary(employees);
    console.log(`Name: ${employees.name}, Salary: $${employees.salary.toFixed(2)}`);
});
