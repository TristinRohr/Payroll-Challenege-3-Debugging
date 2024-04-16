// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  let continueAdding = true; // Initialize a flag to control the loop
  while (continueAdding) { // Start a loop that continues as long as continueAdding is true
    const firstName = prompt("Enter employee's first name:"); // Prompt the user to input the first name
    const lastName = prompt("Enter employee's last name:"); // Prompt the user to input the last name
    const salary = parseFloat(prompt("Enter employee's salary:")); // Prompt the user to input the salary and convert it to a floating-point number

    const employee = { // Create an object representing the employee
      firstName: firstName, // Assign the inputted first name to the firstName property of the employee object
      lastName: lastName, // Assign the inputted last name to the lastName property of the employee object
      salary: salary // Assign the inputted salary to the salary property of the employee object
    };

    employeesArray.push(employee); // Add the employee object to the employeesArray

    const continueInput = prompt("Do you want to add another employee? (yes/no)").toLowerCase(); // Prompt the user whether to continue adding employees and convert the input to lowercase
    if (continueInput !== "yes") { // Check if the input is not 'yes'
      continueAdding = false; // Set continueAdding to false to exit the loop
    }
  }
  return employeesArray; // Return the array of collected employee objects
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0); // Calculate the total salary by summing up the salary of each employee in the array
  const averageSalary = totalSalary / employeesArray.length; // Calculate the average salary by dividing the total salary by the number of employees
  console.log('Average Salary:', averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })); // Log the average salary to the console in USD currency format
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length); // Generate a random index within the range of the employeesArray
  const randomEmployee = employeesArray[randomIndex]; // Get a random employee from the employeesArray using the generated random index
  console.log('Random Employee:', randomEmployee); // Log the randomly selected employee to the console
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
