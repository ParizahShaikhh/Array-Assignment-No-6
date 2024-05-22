// Part-3:
// Array with tuples and indexing - Employee Salaries:

// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.
// 1.Define a type alias named Employee with the following properties:
// •name (string):The name of the employee.
// •hoursWorked (number):The number of hours the employee worked.
// •hourlyRate (number):The hourly rate of the employee.
// •salary (number):The base salary of the employee.
// 2.Define an array named employees containing employee objects. Each employee 
// object should include a name, hoursWorked,hourlyRate,and salary.
// 3.Implement a function named calculateSalary that calculates the salary for each 
// employee based on the hours worked and hourly rate.
// 4.If an employee has worked 20 hours or more, apply a 10% bonus to their salary.

// Answer:

// Step 1: Define the type alias

type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
};

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
function calculateSalary(employees: Employee): void {
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