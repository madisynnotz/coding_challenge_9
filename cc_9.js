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