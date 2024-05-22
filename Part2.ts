// Part-2:
// Multi-Dimensional Arrays and Tuples - Student Grades:
// You are tasked with creating a student grading system. Implement functions and logic to manage student grades effectively.
// 1.Define a TypeScript type alias named Student to represent a student with the following properties:
// •name (string):The name of the student.
// •grades (number[]):An array of grades for different subjects.

// 2.Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.
// 3.Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.
// 4.Display each student's name and average grade.Iterate through the students array, calculate the average grade for each student using the calculateAverageGrade 
// function, and print their name and average grade.



// answer:
// Step 1: Define the type alias

type Student = {
    name: string;
    grades: number[];
};

// Step 2: Create the array of students
let students: Student[] = [
    {
        name: "Parizah Shaikh",
        grades: [1, 4, 2, 3]
    },
    {
        name: "Sania",
        grades: [1, 2, 1, 3]
    },
    {
        name: "Hania",
        grades: [1, 1, 2, 2]
    },
];

// Step 3: Implement the calculateAverageGrade function

function calculateAverageGrade(grades: number[]): number {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

// Step 4: Display each student's name and average grade

function displayStudentGrades(students: Student[]): void {
    students.forEach(students => {
        const averageGrade = calculateAverageGrade(students.grades);
        console.log(`Name: ${students.name}, Average Grade: ${averageGrade.toFixed(2)}`);
    });
}

// Display the student grades
displayStudentGrades(students);