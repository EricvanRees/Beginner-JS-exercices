/* 
Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
*/

const grades = [
  {name: "David", grade: 80},
  {name: "Vinoth", grade: 77},
  {name: "Divya", grade: 88},
  {name: "Ishitha", grade: 95},
  {name: "Thomas", grade: 68},
]

function calcGrade() {

  for (let i = 0; i <= grades.length - 1; i++) {
    if (grades[i].grade < 60) {
      console.log(`${grades[i].name} final grade is "F"`) 
    } else if (grades[i].grade < 70) {
      console.log(`${grades[i].name} final grade is "D"`) 
    } else if (grades[i].grade < 80) {
      console.log(`${grades[i].name} final grade is "C"`) 
    } else if (grades[i].grade < 90) {
      console.log(`${grades[i].name} final grade is "B"`) 
    } else {
      console.log(`${grades[i].name} final grade is "A"`) 
    } 
  }
}

calcGrade();