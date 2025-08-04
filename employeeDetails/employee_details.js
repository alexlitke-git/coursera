const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Lucia Kocurek', age: 32, department: 'HR', salary: 20000},
    //... More employee records can be added here
];

// Function to display all the employees
function displayEmployees() {
    const totalEmployees = employees.map((employee) => `<p>${employee.name} (${employee.id}): working in ${employee.department} department with $${employee.salary} anual salary.</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = '<p>All Employees:</p>' + totalEmployees;
}

// Funtion to calculate total salaries
function calculateTotalSalaries() {
    const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
    document.getElementById('employeesDetails').innerHTML = `<p>Total Salary Amount: $${totalSalary}</p>`;
}

// Function to display all HR employees
function displayHREmployees() {
    const allHREmployees = employees.filter(HREmployee => HREmployee.department === 'HR');
    const displayAllHREmployees = allHREmployees.map(employee => `<p>${employee.name} (${employee.id}): $${employee.salary} salary.</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = '<p>All HR Employees</p>' + displayAllHREmployees;
}

//Function to find Employee with ID #2
function findEmployeeById() {
    const findedEmployee = employees.find(employee => employee.id === 2);
    document.getElementById('employeesDetails').innerHTML = `<p>Employee with ID #2: ${findedEmployee.name}.</p>`;
}