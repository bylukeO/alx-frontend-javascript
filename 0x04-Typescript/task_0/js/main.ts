// Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 21,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 23,
  location: 'Ibadan',
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Render the table using vanilla JavaScript
const table = document.createElement('table');
const headerRow = document.createElement('tr');

const th1 = document.createElement('th');
th1.textContent = 'First Name';
const th2 = document.createElement('th');
th2.textContent = 'Location';

headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

// Loop through students and create rows
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);