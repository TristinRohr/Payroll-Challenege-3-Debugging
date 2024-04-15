// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  let continueAdding = true;
  while (continueAdding) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salary = parseFloat(prompt("Enter employee's salary:"));

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employeesArray.push(employee);

    const continueInput = prompt("Do you want to add another employee? (yes/no)").toLowerCase();
    if (continueInput !== "yes") {
      continueAdding = false;
    }
  }
  return employeesArray;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log('Average Salary:', averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" }));
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log('Random Employee:', randomEmployee);
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
