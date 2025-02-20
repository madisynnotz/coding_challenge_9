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

  // Task 2: Creating a Manager Class (Inheritance & Method Overriding)

  (function () {
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
    
    class Manager extends Employee {
      constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
      }
  
      getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary.toLocaleString()}, Team Size: ${this.teamSize}`;
      }
  
      calculateBonus() {
        return this.salary * 12 * 0.1;
      }
    }
  
    // Example Usage
    const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
    console.log(emp1.getDetails());
    console.log(`Annual Salary: $${emp1.calculateAnnualSalary().toLocaleString()}`);
  
    const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
    console.log(mgr1.getDetails());
    console.log(`Bonus: $${mgr1.calculateBonus().toLocaleString()}`);
  })();

  // Task 3: Creating a Company Class

  class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    
    addEmployee(employee) {
        this.employees.push(employee);
    }
    
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }
}

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

// Task 4: Implementing a Payroll System

Company.prototype.calculateTotalPayroll = function() {
    return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
            return total + employee.calculateAnnualSalary() + employee.calculateBonus();
        }
        return total + employee.calculateAnnualSalary();
    }, 0);
};

console.log(company.calculateTotalPayroll());

// Task 5: Implementing Promotions

Company.prototype.promoteToManager = function(employee, teamSize) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
        const newManager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
        this.employees[index] = newManager;
    }
};

company.promoteToManager(emp1, 3);
company.listEmployees();