// Array of student objects
const students = [
    { name: 'Dami', age: 20, grade: 'A' },
    { name: 'Theo', age: 22, grade: 'B' },
    { name: 'Fagbenro', age: 23, grade: 'A' },
    { name: 'Ade', age: 21, grade: 'C' },
    { name: 'Ola', age: 24, grade: 'B' }
];

// Function to filter students by grade
const filterByGrade = (studentsArray, grade) => {
    return studentsArray.filter(student => student.grade === grade);
};

// Function to calculate the average age of students
const averageAge = studentsArray => {
    if (studentsArray.length === 0) return 0;
    
    const totalAge = studentsArray.reduce((sum, student) => sum + student.age, 0);
    return totalAge / studentsArray.length;
};

// Test cases
console.log('Students with grade A:', filterByGrade(students, 'A'));
// Output: Students with grade A: [ { name: 'Dami', age: 20, grade: 'A' }, { name: 'Fagbenro', age: 23, grade: 'A' } ]

console.log('Average age of students:', averageAge(students));
// Output: Average age of students: 22

console.log('Students with grade B:', filterByGrade(students, 'B'));
// Output: Students with grade B: [ { name: 'Theo', age: 22, grade: 'B' }, { name: 'Ola', age: 24, grade: 'B' } ]

console.log('Students with grade C:', filterByGrade(students, 'C'));
// Output: Students with grade B: [ { name: 'Ade', age: 21, grade: 'C' }]

console.log('Average age of students with grade A:', averageAge(filterByGrade(students, 'A')));
// Output: Average age of students with grade A: 21.5

console.log('Average age of students with grade B:', averageAge(filterByGrade(students, 'B')));
// Output: Average age of students with grade B: 23

console.log('Average age of students with grade C:', averageAge(filterByGrade(students, 'C')));
// Output: Average age of students with grade C: 21
