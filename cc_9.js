// Task 1: Creating an Employee Class

class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
    }
  
    getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary.toLocaleString()}`;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  // Example Usage
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  console.log(emp1.getDetails());
  console.log(`Annual Salary: $${emp1.calculateAnnualSalary().toLocaleString()}`);