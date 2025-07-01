const student: { name: string; age: number } = {
  name: "John Doe",
  age: 20,
}
console.log(student);

const courses: string[] = ["Math", "Science", "History"];
console.log(courses);

const studentName: string = "Peter";
const studentAge: number = 22;
const studentDetails = { name: studentName, age: studentAge }
console.log(studentDetails); 

// Type Aliases
type nameType = string;
type ageType = number;
type studentInfo = { name: nameType; age: ageType }

const studentNameValue: nameType = "Alice";
const studentAgeValue: ageType = 21;
const studentInfoValue: studentInfo = { name: studentNameValue, age: studentAgeValue }
console.log(studentInfoValue);

//Interfaces Aliases

interface Rectangle {
  width: number;
  height: number;
}

interface colored extends Rectangle {
  color: string;
}
const rectangle: Rectangle = {
  width : 10,
  height: 20,
}

const coloredRectangle: colored = {
  width: 15,
  height: 25,
  color: "blue",
}
console.log(rectangle);
console.log(coloredRectangle);