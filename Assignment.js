 const students = [
  {
    name: "John",
    age: 18,
    score: 75,
    department: "Frontend"
  },
  {
    name: "Mary",
    age: 20,
    score: 45,
    department: "Backend"
  },
  {
    name: "James",
    age: 19,
    score: 90,
    department: "Frontend"
  },
  {
    name: "Grace",
    age: 22,
    score: 60,
    department: "Design"
  },
  {
    name: "David",
    age: 17,
    score: 35,
    department: "Frontend"
  }
];

// 1. Display all students
function displayAllStudents() {
  console.log("=== All Students ===");
  students.forEach(student => {
    console.log(`${student.name} | Age: ${student.age} | Score: ${student.score} | Department: ${student.department}`);
  });
}

// 2. Display only students who passed (score ≥ 50)
function displayPassedStudents() {
  console.log("=== Students Who Passed ===");
  const passed = students.filter(student => student.score >= 50);
  passed.forEach(student => {
    console.log(`${student.name} | Score: ${student.score} | Department: ${student.department}`);
  });
  return passed;
}
console.log(displayPassedStudents());



// 3. Display only students who failed
function displayFailedStudents() {
  console.log("=== Students Who Failed ===");
  const failed = students.filter(student => student.score < 50);
  failed.forEach(student => {
    console.log(`${student.name} | Score: ${student.score} | Department: ${student.department}`);
  });
  return failed;
}
console.log(displayFailedStudents());

// 4. Count how many students passed
function countPassedStudents() {
  const count = students.filter(student => student.score >= 50).length;
  console.log(`Number of students who passed: ${count}`);
  return count;
}
console.log(countPassedStudents());

// 5. Count how many students failed
function countFailedStudents() {
  const count = students.filter(student => student.score < 50).length;
  console.log(`Number of students who failed: ${count}`);
  return count;
}
console.log(countFailedStudents());

// 6. Find the student with the highest score
function findHighestScore() {
  const highest = students.reduce((max, student) => 
    student.score > max.score ? student : max
  , students[0]);
  console.log(`Highest score: ${highest.name} with ${highest.score}`);
  return highest;
}
console.log(findHighestScore());

// 7. Find the student with the lowest score
function findLowestScore() {
  const lowest = students.reduce((min, student) => 
    student.score < min.score ? student : min
  , students[0]);
  console.log(`Lowest score: ${lowest.name} with ${lowest.score}`);
  return lowest;
}
console.log(findLowestScore());

// 8. Calculate the average score
function calculateAverageScore() {
  const total = students.reduce((sum, student) => sum + student.score, 0);
  const average = total / students.length;
  console.log(`Average score: ${average.toFixed(2)}`);
  return average;
}
console.log(calculateAverageScore());

// 9. Search for a student by name
function searchStudentByName(name) {
  const student = students.find(student => 
    student.name.toLowerCase() === name.toLowerCase()
  );
  if (student) {
    console.log(`Found: ${student.name} | Age: ${student.age} | Score: ${student.score} | Department: ${student.department}`);
    return student;
  } 
  else {
    console.log(`Student "${name}" not found.`);
    return null;
  }
}
console.log(searchStudentByName("Mary"));